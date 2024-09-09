import { Link } from "react-router-dom"

const MovieCard = ({poster, id}) => {
     
    
    if(!poster) return
    
    return (
        <Link to={`/movie/${id}`}>
            <div className=" mb-[15px]">
                <img className="sm:w-[150px] w-[120px] sm:h-[150px] h-[120px] max-w-[200px] mr-[15px]" alt="poster" src={`https://image.tmdb.org/t/p/w500/${poster}`} />  
            </div>
        </Link>
    )
}

export default MovieCard 