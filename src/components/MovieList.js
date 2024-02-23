import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {

    //console.log(movies)
    if(!movies) return

    return (
        <div className="">
            <h1 className=" text-[#e5e5e5] ml-[30px] mt-[20px] text-[20px] mb-[20px] font-semibold">{title}</h1>
            <div className=" overflow-x-scroll mt-[20px] ml-[30px] flex" >
                
                <div className="flex">
                {movies.map(movie =>  <MovieCard key={movie.id} poster={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList