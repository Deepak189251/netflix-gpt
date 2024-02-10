//import { useNavigate } from "react-router-dom"
//import { useDispatch } from "react-redux"
//import { removeUser } from "../utils/UserSlice"
//import { UserState } from "../utils/Context"
import { useSelector } from "react-redux"
//import { signOut } from "firebase/auth"
//import { auth } from "../utils/Firebase"
//import { nowPlayingUrl, options } from "../utils/Constants"
//import { useEffect } from "react"
 import {useNowMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies} from "../hooks/useMovies"
//import Header from "./Header"
 import PrimaryContainer from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"
import GptSuggestion from "./GptSuggestion"


const Browse = () => {
   // const navigate = useNavigate()
    //const {state: {users}, dispatch} = UserState()
   // const dispatch = useDispatch()
   // const user = useSelector((store) => store.user)

   useNowMovies()
   useTopRatedMovies()
   useUpcomingMovies()
   usePopularMovies()
   const gptValue = useSelector(store => store.gptSearch.gptValue)
    
   

    
    return (
    <div className="  w-[100%] h-[100%] bg-[#141414]">

      { gptValue 

         ? 

      <GptSuggestion />  

         : 
      <>
       <PrimaryContainer />
       <SecondaryContainer />
      </>}
          
         
        

       
    </div>)
}

export default Browse