import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"
const GptMovies = () => {

 const {gptMovieNames, gptMovieResults} = useSelector(store => store.gptSearch)
 if(!gptMovieResults) return


    return (
        <div className=" flex justify-between items-center overflow-x-scroll px-[20px]">
           {gptMovieResults?.results?.map((movie) => <MovieCard key={movie?.id} id={movie?.id} poster={movie?.poster_path}/>)}
        </div>
    )
}

export default GptMovies