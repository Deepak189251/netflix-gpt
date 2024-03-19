import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"
const GptMovies = () => {

 const {gptMovieNames, gptMovieResults} = useSelector(store => store.gptSearch)
 if(!gptMovieResults) return


    return (
        <div className=" flex ">
           {gptMovieResults.map((movie) => <MovieCard key={movie?.id} poster={movie?.poster_path}/>)}
        </div>
    )
}

export default GptMovies