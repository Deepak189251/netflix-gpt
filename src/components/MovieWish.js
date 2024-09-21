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
        <div className=" md:w-[620px] sm:w-[510px] xs:w-[350px] w-[310px]  border-black border bg-white my-[10px]">
        <div className=" flex justify-between mb-[3px]">
        <Link to={`/movie/${movie?.id}`} >
            <div className="flex">
                <div className=" sm:w-[120px] sm:h-[120px] w-[95px] h-[108px] my-[10px] xs:mx-[10px] mx-[5px]">
                    <img className=" w-[100%] h-[100%]" loading="lazy"  alt="poster" src={movie?.data?.Poster}></img>
                </div>
                <div className=" sm:mt-[25px] mt-[15px]">
                    <p className=" sm:text-xl xs:text-lg text-base font-semibold xs:mb-[10px] mb-[7px]">{`${id + 1} . ${movie?.data?.Title}`}</p>
                    <div className=" flex text-gray-600 xs:mb-[10px] mb-[7px]">
                        <p className=" sm:mr-[13px] mr-[10px] xs:text-base text-sm">{movie?.data?.Year}</p>
                        
                        <p className=" sm:mr-[13px] mr-[10px] xs:text-base text-sm">{processedRuntime}</p>

                        <p className=" xs:text-base text-sm">{movie?.data?.Rated}</p>
                    </div>
                    <div className=" flex">
                        <FontAwesomeIcon className=" mt-[4px] mr-[3px]" icon={faStar} color="yellow" />
                        <p>{movie?.data?.imdbRating}</p>
                    </div>
                   
                </div>
                
            </div>
            </Link>
            
            <div className=" sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] bg-red-500 cursor-pointer" onClick={handleRemoveMovie}>
                <FontAwesomeIcon className=" sm:ml-[7px] ml-[5px] sm:mb-0 mb-[2px]" icon={faX} />
            </div>
        </div>
        <div>
            <div className=" mx-[10px] mb-[10px]">
                <p>{movie?.data?.Plot}</p>
            </div>
        </div>
    </div>
    )

}

export default MovieWish