import { useSelector } from "react-redux"
import MovieWish from "./MovieWish"
const WishList = () => {

    const wishlist = useSelector(store => store.movie.wishList)

    if(!wishlist) return

    return (
        <div className=" w-[100%] h-[100%] mt-[70px] absolute bg-gray-200">
            <div className=" mt-[30px] mx-[80px]">
                <div className=" flex mb-[30px]">
                    <h1 className=" text-4xl font-bold">My WishList </h1><span className=" text-3xl font-bold ml-[10px] pt-[2px]">{`(${wishlist?.length})`}</span>
                </div>

                <div className=" flex flex-wrap">
                    {wishlist?.map((a, i) => 
                        <MovieWish key={i} movie={a} id={i} />
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default WishList