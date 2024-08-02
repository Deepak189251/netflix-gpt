import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faStar } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { removeMovieFromWishList, addMovieInWishList } from "../utils/MovieSlice"
import { Link } from "react-router-dom"


const MovieWish = ({ movie, id}) => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.user.uid)
    const wishList = JSON.parse(localStorage.getItem(user))

    const handleRemoveMovie = () => {
        dispatch(removeMovieFromWishList(movie?.imdbID))
        const res = wishList.filter((a) => a?.data?.imdbID !== movie?.data?.imdbID)
        localStorage.setItem(user, JSON.stringify(res))
        dispatch(addMovieInWishList(res))
    }

    const runtime = Number(movie?.data?.Runtime.slice(0, 3))
    
    
    const processedRuntime = getruntime(runtime)
     
   

    function getruntime (num) {
        if(num < 60) return num
        let hr = num / 60

        for(let a = 60 ; a < num ; a++){
            num = num - 60
        }

        let finalNum = hr.toString().slice(0,1) + 'Hr ' + num + 'mins' 
        return finalNum
    }

    return (
        
        <div className=" w-[620px] h-[230px] border-black border bg-white mx-[30px] my-[10px]">
        <div className=" flex justify-between mb-[3px]">
        <Link to={`/movie/${movie?.id}`} >
            <div className="flex">
                <div className=" w-[120px] h-[120px] m-[10px]">
                    <img className=" w-[100%] h-[100%]"  alt="poster" src={movie?.data?.Poster}></img>
                </div>
                <div className=" mt-[25px]">
                    <p className=" text-xl font-semibold mb-[10px]">{`${id + 1} . ${movie?.data?.Title}`}</p>
                    <div className=" flex text-gray-600 mb-[10px]">
                        <p className=" mr-[13px]">{movie?.data?.Year}</p>
                        
                        <p className=" mr-[13px]">{processedRuntime}</p>

                        <p>{movie?.data?.Rated}</p>
                    </div>
                    <div className=" flex">
                        <FontAwesomeIcon className=" mt-[4px] mr-[3px]" icon={faStar} color="yellow" />
                        <p>{movie?.data?.imdbRating}</p>
                    </div>
                   
                </div>
                
            </div>
            </Link>
            
            <div className=" w-[25px] h-[25px] bg-red-500 cursor-pointer" onClick={handleRemoveMovie}>
                <FontAwesomeIcon className=" ml-[7px]" icon={faX} />
            </div>
        </div>
        <div>
            <div className=" mx-[10px]">
                <p>{movie?.data?.Plot}</p>
            </div>
        </div>
    </div>
    
    )
}

export default MovieWish