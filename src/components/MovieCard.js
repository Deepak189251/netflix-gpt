import { Link } from "react-router-dom"

const MovieCard = ({poster, id}) => {
     
    
    if(!poster) return
    
    return (
        <Link to={`/movie/${id}`}>
            <div className="">
                <img className="w-[150px] h-[150px] max-w-[200px]" alt="poster" src={`https://image.tmdb.org/t/p/w500/${poster}`} /> 
            </div>
        </Link>
    )
}

export default MovieCard 