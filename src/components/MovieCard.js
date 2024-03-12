const MovieCard = ({poster}) => {
     
    if(!poster) return
    return (
        <div className=" mr-[20px]">
            <img className="w-[200px] h-[170px] max-w-[200px]" alt="poster" src={`https://image.tmdb.org/t/p/w500/${poster}`} /> 
        </div>
    )
}

export default MovieCard 