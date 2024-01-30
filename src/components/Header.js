//import { Link } from "react-router-dom";
 import { onAuthStateChanged } from "firebase/auth";
 import { auth } from "../utils/Firebase";
import { IoLanguageOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { Netflix_Logo } from "../utils/Constants";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)


  const handleClick = () => {

    navigate("/login")


  }

  
  useEffect(() => {
      
   const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //const uid = user.uid;
        dispatch(addUser(user.email))
        navigate("/browse")
       
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => Unsubscribe()
  }, [])


  if(user) return
    
    return (
   
       <div className=" absolute flex justify-between w-[100%]">
          <div className="logo-container ml-[140px] mt-[6px]">
            <img className=" w-44 h-18" src={Netflix_Logo} alt="logo" />
          </div>
          <div className="signin-container mr-[170px] mt-[25px] flex">
            <div className=" justify-between relative ">
              <IoLanguageOutline className="text-white absolute top-[5px] left-[5px] pl-[5px]" />
              <select className=" bg-[rgb(45,45,45)] text-white pl-[22px] border border-1px-white  mr-[22px] text-sm rounded  pb-[5px] pr-[8px] pt-[2px]">
                
                <option className=" bg-white">English </option>
                <option className=" bg-white">Hindi </option>
              </select> 
            </div>
               {/**             <svg className=" text-white absolute top-[5px] left-[5px] pl-[5px]" alt="" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
  */}
    
            <button onClick={handleClick} className=" rounded text-xs px-[12px] py-[6px] text-white w-[70px] font-semibold bg-red-600 h-[30px] hover:bg-[rgb(193,17,25)] duration-300">Sign In</button> 
          </div>
       </div>
    ) 
}

export default Header

