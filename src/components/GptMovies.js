import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"
import { Spinner } from "./ui/Spinner"

const GptMovies = () => {

 const {gptMovieNames, gptMovieResults} = useSelector(store => store.gptSearch)
 if(!gptMovieResults) return


    return (
        <div className=" flex items-center flex-wrap ">
           {gptMovieResults?.results?.map((movie) => <MovieCard key={movie?.id} id={movie?.id} poster={movie?.poster_path}/>)}
        </div>
    )
}

export default GptMovies