//import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
//import { removeUser } from "../utils/UserSlice"
//import { UserState } from "../utils/Context"
import { useSelector } from "react-redux"
import { addMovieInWishList } from "../utils/MovieSlice"
//import { signOut } from "firebase/auth"
//import { auth } from "../utils/Firebase"
//import { nowPlayingUrl, options } from "../utils/Constants"
//import { useEffect } from "react"
 import {useNowMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies} from "../hooks/useMovies"
//import Header from "./Header"
 import PrimaryContainer from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"
//import GptSuggestion from "./GptSuggestion"
//import { doc, getDoc } from "firebase/firestore";

export const ReadData = async () => {

    
}

const Browse = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store?.user?.uid)
   
   // const navigate = useNavigate()
    //const {state: {users}, dispatch} = UserState()
   // const dispatch = useDispatch()
   // const user = useSelector((store) => store.user)

   useNowMovies()
   useTopRatedMovies()
   useUpcomingMovies()
   usePopularMovies()
   //const gptValue = useSelector(store => store.gptSearch.gptValue)
    
   if(!user) return
   if(!localStorage.getItem(user)) {
       localStorage.setItem(user, "[]")
   }

   const wishList = JSON.parse(localStorage.getItem(user))
   dispatch(addMovieInWishList(wishList))


    
    return (
    <div className="  w-[100%] h-[100%] bg-[#141414]">

      
         <>
            <PrimaryContainer />
            <SecondaryContainer />
        </>
      
          
    </div>)
}

export default Browse