import { useSelector } from "react-redux"
import MovieWish from "./MovieWish"
//import { Spinner } from "./ui/Spinner"
const WishList = () => {

    const wishlist = useSelector(store => store.movie.wishList)
    //console.log(wishlist.length)
    return ( wishlist.length === 0 ? 

        <div className="  absolute flex justify-center w-[100%] h-[100%] items-center">
            <p className=" text-xl font-bold"> Your Wishlist is empty!</p>
           
        </div>


        :
        <div className=" w-[100%] h-[100%] mt-[70px] absolute">
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