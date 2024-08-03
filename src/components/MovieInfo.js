import { useParams } from "react-router-dom"
//import { options } from "../utils/Constants"
import { useMovieInfo } from "../hooks/useMovies"
import { useSelector } from "react-redux"
//import {  useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { useMovieClips } from "../hooks/useNowMovieClips"

const MovieInfo = () => {

    const {resId} = useParams()
    useMovieInfo(resId)
    useMovieClips(resId)
    //const [info, setInfo] = useState()
    const movieInfo = useSelector(store => store.movie.movieInfo)
    const movieCast = useSelector(store => store.movie.movieCast)
    const movieClip = useSelector(store => store.movie.movieClip)
    const imgUrl = "https://media.istockphoto.com/id/1337144146/ro/vector/implicit-avatar-profil-icon-vector.jpg?s=2048x2048&w=is&k=20&c=J9_blvGXaq_t7qrhr8Pq_veC7dDo9dZ6bjRU730GWzI="
   // if(!info) return
    //console.log(info)



    if(!movieInfo && !movieClip) return
    
    console.log(movieCast)
    console.log(movieInfo)
    
    let runtime = Number(movieInfo?.runtime)
    
    let runtime2 = getruntime(runtime)


    function getruntime (num) {
        if(num < 60) return num
        let hr = num / 60

        for(let a = 60 ; a < num ; a++){
            num = num - 60
        }

        let finalNum = hr.toString().slice(0,1) + 'Hr ' + num + 'mins' 
        return finalNum
    }
    

 
    
  console.log(runtime2)

    return (
        <div className=" bg-gray-800 w-[100%] h-auto absolute">
            <div className=" mx-[150px] mt-[100px]">
                <div className="  ">
                    <p className=" text-4xl font-bold text-white">{movieInfo?.title}</p>
                </div>

                <div className=" flex mb-[10px]">
                    <p className=" text-gray-100 mr-[10px]">{movieInfo?.release_date.slice(0,4)}</p>

                    <FontAwesomeIcon icon={faCircle} className=" w-[5px] h-[5px] text-gray-100 mr-[10px] mt-[10px]"/>

                    <p className=" text-gray-100">{runtime2}</p>
                </div>
                
                <div className=" flex mb-[20px]">
                    <div>
                        <img className="w-[450px] h-[500px] max-w-[300px]" alt="poster" src={`https://image.tmdb.org/t/p/w500/${movieInfo?.poster_path}`} /> 
                    </div>

                    <div className=" h-[500px] w-[900px] ml-[30px]">
                        <iframe className="w-[100%] h-[100%]  aspect-video" src={`https://www.youtube.com/embed/${movieClip?.key}?&autoplay=1&loop=1&mute=1&playlist=${movieClip?.key}&controls=0`} title="YouTube video player"  ></iframe>
                    </div>
                </div>

                <div className=" flex mb-[20px]">
                    {movieInfo?.genres.map((n) => <div className=" border border-gray-500 text-gray-100 w-[120px] h-[30px] text-center rounded-xl mr-[20px] hover:bg-gray-400 cursor-pointer">{n?.name}</div> )}
                </div>
                
                <div>
                    <p className=" text-gray-100 text-base font-medium mb-[20px]">{movieInfo?.overview}</p>
                </div>

                { /*<div className=" flex overflow-x-scroll overflow-y-visible h-[200px]">
                    {movieCast?.cast?.map((n) => 
                            <div className=" w-[150px] h-[70px] mr-[10px]">
                                <img className=" w-[100%]" alt="poster" src={`https://image.tmdb.org/t/p/w500/${n?.profile_path}`}></img>
                                <p>{n?.name}</p>
                                <p>{n?.character}</p>
                            </div>
                        )
                    }
                </div> */}

                <div className=" flex overflow-x-scroll">
                    {movieCast?.cast?.map((n) => 
                        <div className=" w-[170px] h-[230px] text-center text-gray-100 mb-[10px]">
                            <img className=" w-[110px] h-[150px] mx-auto mb-[10px]" alt="poster" src={n.profile_path ? `https://image.tmdb.org/t/p/w500/${n?.profile_path}` : imgUrl}/>
                            <p className=" mb-[10px]">{n?.name}</p>
                            <p className=" text-xs mb-[10px] w-[150px]">{n?.character}</p>
                        </div>
                    )}
                </div>

                {/*<div className=" w-auto flex">
                    
                    {movieCast?.cast?.map((n) => <CastCard key={n.id} img={n.profile_path} />)}
                </div>*/}

                
                    
             
                
            </div>

           
            
        </div>
    )
}

export default MovieInfo