import { useRef } from "react"
import openai from "../utils/OpenAi"
import { options } from "../utils/Constants"
import { addGptMovies } from "../utils/GptSearchSlice"
import { useDispatch } from "react-redux"
//import { useSearchMovies } from "../hooks/useMovies"
const GptSearch = () => {

    const searchText = useRef(null)
    const searchDate = useRef(null)
    const dispatch = useDispatch()

    const getSearchMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + searchText.current.value + '&include_adult=false&language=en-US&primary_release_year=' + searchDate.current.value + 'page=1&' , options)
        const json = await data.json()
        //console.log(json)
        
        dispatch(addGptMovies({name: searchText.current.value , result: json}))
        
        
    }

    const handleSearchClick = async () => {
        
       // const gptQuery = "act as a movie recommendation system and suggest some movie for the query :" + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,KoiMilGaya"
        const gptQuery = "act as a movie recommendation system and suggest some movie for the query :" + searchText.current.value + ". only give me names of 8 movies with it's release year, comma separated like the example result given ahead. Example Result: Gadar1990,pk2014"

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
        const movieNames = chatCompletion?.choices[0]?.message?.content
        //const result = chatCompletion?.choices[0]?.message?.content.split(",")
        const result = movieNames.split(",")
        //console.log(result)
        console.log(chatCompletion)
       // const names = []
        const moviePromiseArray = result.map((movie) => {
            let name 
            let year  

              if(movie.charAt(movie.length - 1) === ")"){
                name = movie.slice(0, movie.length - 6)
                year = movie.slice(movie.length - 5, movie.length - 1)
              }
              else{
                name = movie.slice(0, movie.length - 4)
                year = movie.slice(movie.length - 4)
              }

            console.log(name + year)
            return getSearchMovies(name.trim(), year.trim())
           
        })
        //console.log(names)
        
        const movieLists = await Promise.all(moviePromiseArray)
        console.log(movieLists)
        
        const filteredMovies = movieLists.map((res) => res[0])
        
        dispatch(addGptMovies({name: movieNames , result: filteredMovies}))
        console.log(filteredMovies)
        
        
    }

    return (
        <div className=" w-auto flex justify-center items-center">
            <form className=" flex justify-between" onSubmit={((e) => e.preventDefault())}>
                <input className=" mb-[5px]  bg-black w-[374px] h-[56px] text-white text-[20px]  border rounded text-left pb-2 pl-3" type="text" placeholder="Search Movies..." ref={searchText} />
                <input className=" bg-black rounded text-white" type="number" ref={searchDate} />
                <button onClick={getSearchMovies} className=" bg-red-600 w-[203px] mb-[5px] h-[56px] font-semibold text-white rounded text-left text-3xl flex  hover:bg-[rgb(193,17,25)] duration-300 ml-[10px]" type="submit"><span className=" rounded mt-[9px] ml-[55px]">Search</span></button>
            </form>
        </div>
    )
}

export default GptSearch