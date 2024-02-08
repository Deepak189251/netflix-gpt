import { useSelector } from "react-redux"
import MovieList from "./MovieList"
const SecondaryContainer = () => {
  
    const nowMovies = useSelector(store => store.movie.nowMovie)
    const topRatedMovies = useSelector(store => store.movie.topRatedMovie)
    const popularMovies = useSelector(store => store.movie.popularMovie)
    const upcomingMovies = useSelector(store => store.movie.upComingMovie)

    return(
        <div className=" bg-black ">
            <div className=" -mt-52 relative z-[20]">
            <MovieList title={"Top Rated"} movies={topRatedMovies} />
            <MovieList title={"Popular"} movies={popularMovies} />
            <MovieList title={"New Release"} movies={nowMovies} />
            <MovieList title={"Upcoming"} movies={upcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer
