import { Link } from "react-router-dom";
 import { onAuthStateChanged, signOut } from "firebase/auth";
 import { auth } from "../utils/Firebase";
import { IoLanguageOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { Netflix_Logo } from "../utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown, faCaretUp, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
//import { toggleGpt } from "../utils/GptSearchSlice";
import { SupportedLanguage } from "../utils/Constants";
import { toggleLanguage } from "../utils/ConfigSlice";
import { lang } from "../utils/LanguageConstants";




const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const [input, setInput] = useState(false)
  const [userImg, setUserImg] = useState("https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp")
  const [userName, setUserName] = useState('User')
 // const [color, setColor] = useState(false)
  const colorT = " w-[100%] h-[70px] bg-black fixed z-[30] "
 // const colorF = " w-[100%] h-[70px]  bg-gradient-to-b from-black to-transparent fixed z-[30]"
 // const gptToggleValue = useSelector(store => store?.gptSearch?.gptValue)
  const selectedLanguage = useSelector(store => store?.config?.preferedLanguage)
  
  const handleClick = () => {

    navigate("/login")


  }

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      /* dispatch({
        type: "Remove",
      })*/
      
      //navigate('/')
     // dispatch(removeUser())
      setInput(false)
      console.log("signout successfully")
    }).catch((error) => {
      // An error happened.
    });
      
      
      //dispatch(removeUser())
     
      


  }
  
/*  const changeHeaderBg = () => {

    if(window.scrollY >= 70){

      setColor(true)
     
    }
    else {
      setColor(false)
      
    } 
  } */

 // window.addEventListener('scroll', changeHeaderBg)

 /* const handleGptToggle = () => {

    dispatch(toggleGpt())
  }*/

  const handleToggleLanguage = (res) => {

    dispatch(toggleLanguage(res.target.value))
  }

  
  useEffect(() => {
      
   const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //const uid = user.uid;
        console.log(user)
        dispatch(addUser({email:user.email, uid:user.uid}))
        navigate("/browse")
        
        user?.photoURL && setUserImg(user?.photoURL)
        user?.displayName && setUserName(user?.displayName)
       
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
        setUserImg("https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp")
        
      }
    });

    return () => Unsubscribe()
  }, [])

  //console.log(lang[selectedLanguage].signinBtn)

  if(user) 

    // {color ? colorT : colorF}
     
   return(
     /** This header is for LogedIn users */
    <div   className={colorT}>
       <div className=" w-[100%] h-[100%] flex pr-[60px] pl-[50px]    ">
          <img className=" w-[117px] h-[58px] pt-[8px] mr-[35px]" src={Netflix_Logo} alt="logo" />
          <div className=" w-[100%] flex justify-between">

            <div className=" flex text-white mt-[22px]">
              <p className=" mr-[20px] text-[14px] font-semibold cursor-pointer">Home</p>
              <p className=" mr-[20px] text-[14px] font-semibold cursor-pointer">TV Shows</p>
              <p className=" mr-[20px] text-[14px] font-semibold cursor-pointer">Movies</p>
              <p className=" mr-[20px] text-[14px] font-semibold cursor-pointer">New & Popular</p>
              <p className=" mr-[20px] text-[14px] font-semibold cursor-pointer">My List</p>
              <p className=" text-[14px] font-semibold cursor-pointer">Browse by Languages</p>
            </div>
              
            <div className=" flex">
              <div className=" mt-[17px] h-[35px] pt-[3px] pl-[6px]">
                <Link to={"/search"}><FontAwesomeIcon icon={faMagnifyingGlass} color="white" className=" mr-[5px] w-[28px] h-[21px] mt-[5px]" /></Link>
              </div>
              
              <FontAwesomeIcon icon={faBell} color="white" className=" mt-[25px] ml-[20px] w-[24px] h-[22px] mr-[5px]"/>

              <div className="flex mt-[23px]" onMouseEnter={() => setInput(true)} onMouseLeave={() => setInput(false)}>
                <img alt="user-icon" className="w-[28px] h-[28px] ml-[20px] mr-[8px] rounded " src={userImg} />
                {input
                 ?
                  <span><FontAwesomeIcon icon={faCaretUp} color="white" /> 
                    <div className="w-[218px] h-[251px] bg-black absolute right-[50px] top-[71px] border-[2px] border-transparent z-40 text-white">
                      <p className="pl-[20px] mt-[10px] mb-[10px] text-lg font-semibold">{userName}</p>
                      <p className="pl-[10px] mt-[20px] mb-[10px] flex cursor-pointer hover:underline"> 
                        <svg className="w-[24px] h-[24px] mr-[15px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1213 1.7071C17.9497 0.535532 16.0503 0.53553 14.8787 1.7071L13.2929 3.29289L12.5858 4L1.58579 15C1.21071 15.3751 1 15.8838 1 16.4142V21C1 22.1046 1.89543 23 3 23H7.58579C8.11622 23 8.62493 22.7893 9 22.4142L20 11.4142L20.7071 10.7071L22.2929 9.12132C23.4645 7.94975 23.4645 6.05025 22.2929 4.87868L19.1213 1.7071ZM15.5858 7L14 5.41421L3 16.4142L3 19C3.26264 19 3.52272 19.0517 3.76537 19.1522C4.00802 19.2527 4.2285 19.4001 4.41421 19.5858C4.59993 19.7715 4.74725 19.992 4.84776 20.2346C4.94827 20.4773 5 20.7374 5 21L7.58579 21L18.5858 10L17 8.41421L6.70711 18.7071L5.29289 17.2929L15.5858 7ZM16.2929 3.12132C16.6834 2.73079 17.3166 2.73079 17.7071 3.12132L20.8787 6.29289C21.2692 6.68341 21.2692 7.31658 20.8787 7.7071L20 8.58578L15.4142 4L16.2929 3.12132Z" fill="currentColor"></path></svg>
                        Manage profiles
                      </p> 

                      <p className="mt-[10px] pl-[10px] mb-[10px] flex cursor-pointer hover:underline">
                        <svg id="profile-transfer" className="w-[24px] h-[24px] mr-[15px]" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 1C3.79086 1 2 2.79086 2 5V17C2 19.2091 3.79086 21 6 21H9.58579L8.29289 22.2929L9.70711 23.7071L12.7071 20.7071C13.0976 20.3166 13.0976 19.6834 12.7071 19.2929L9.70711 16.2929L8.29289 17.7071L9.58579 19H6C4.89543 19 4 18.1046 4 17V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V17C20 18.1046 19.1046 19 18 19H15V21H18C20.2091 21 22 19.2091 22 17V5C22 2.79086 20.2091 1 18 1H6ZM7.5 10C8.32843 10 9 9.32843 9 8.5C9 7.67157 8.32843 7 7.5 7C6.67157 7 6 7.67157 6 8.5C6 9.32843 6.67157 10 7.5 10ZM18 8.5C18 9.32843 17.3284 10 16.5 10C15.6716 10 15 9.32843 15 8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5ZM16.402 12.1985C15.7973 12.6498 14.7579 13 13.5 13C12.2421 13 11.2027 12.6498 10.598 12.1985L9.40195 13.8015C10.4298 14.5684 11.9192 15 13.5 15C15.0808 15 16.5702 14.5684 17.598 13.8015L16.402 12.1985Z" fill="currentColor"></path></svg>
                          Transfer profile
                      </p> 
                      <Link to={"/profile"}><p className="mt-[10px] pl-[10px] mb-[10px] flex cursor-pointer hover:underline">
                        <svg className="w-[24px] h-[24px] mr-[15px]"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5ZM17 5C17 7.76142 14.7614 10 12 10C9.23858 10 7 7.76142 7 5C7 2.23858 9.23858 0 12 0C14.7614 0 17 2.23858 17 5ZM4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21V21.5136C19.5678 21.5667 18.9844 21.6327 18.2814 21.6988C16.6787 21.8495 14.461 22 12 22C9.53901 22 7.32131 21.8495 5.71861 21.6988C5.01564 21.6327 4.43224 21.5667 4 21.5136V21ZM21.1508 23.3775C21.1509 23.3774 21.151 23.3774 21 22.3889L21.151 23.3774C21.6393 23.3028 22 22.8829 22 22.3889V21C22 15.4772 17.5228 11 12 11C6.47715 11 2 15.4772 2 21V22.3889C2 22.8829 2.36067 23.3028 2.84897 23.3774L3 22.3889C2.84897 23.3774 2.84908 23.3774 2.8492 23.3775L2.84952 23.3775L2.85043 23.3776L2.85334 23.3781L2.86352 23.3796L2.90103 23.3852C2.93357 23.3899 2.98105 23.3968 3.04275 23.4055C3.16613 23.4228 3.3464 23.4472 3.57769 23.4765C4.04018 23.535 4.7071 23.6126 5.5314 23.6901C7.1787 23.8449 9.461 24 12 24C14.539 24 16.8213 23.8449 18.4686 23.6901C19.2929 23.6126 19.9598 23.535 20.4223 23.4765C20.6536 23.4472 20.8339 23.4228 20.9573 23.4055C21.0189 23.3968 21.0664 23.3899 21.099 23.3852L21.1365 23.3796L21.1467 23.3781L21.1496 23.3776L21.1505 23.3775L21.1508 23.3775Z" fill="currentColor"></path></svg>
                        Account
                        </p>
                       </Link> 
                      <p className="mt-[10px] pl-[10px] mb-[20px] flex cursor-pointer hover:underline">
                        <svg className="w-[24px] h-[24px] mr-[15px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 8C10.6831 8 10 8.74303 10 9.5H8C8 7.25697 10.0032 6 12 6C13.9968 6 16 7.25697 16 9.5C16 10.8487 14.9191 11.7679 13.8217 12.18C13.5572 12.2793 13.3322 12.4295 13.1858 12.5913C13.0452 12.7467 13 12.883 13 13V14H11V13C11 11.5649 12.1677 10.6647 13.1186 10.3076C13.8476 10.0339 14 9.64823 14 9.5C14 8.74303 13.3169 8 12 8ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z" fill="currentColor"></path></svg>
                        Help Center
                      </p> 
                      <hr></hr>
                      <button className=" hover:underline ml-[35px] mt-[10px]" onClick={handleSignout}>Sign out of Netflix</button>
                    </div>
                  </span> 
                : 
                <span><FontAwesomeIcon icon={faCaretDown} color="white" /></span>}
               
              </div>
            </div>
          </div>
       </div>
    </div>
  )
    
    return (
    
      /** This header is for new users */

       <div className=" absolute flex justify-between w-[100%]">
          <div className="logo-container mt-[6px] md:mt-[0px] ml-[10px]  sm:ml-[40px] md:ml-[80px]  xl:ml-[140px] ">
            <img className=" w-[125px] h-[65px] md:w-[180px] md:h-[80px]" src={Netflix_Logo} alt="logo" />
          </div>
          <div className="signin-container mt-[25px] flex mr-[20px] sm:mr-[40px] md:mr-[80px] xl:mr-[170px] ">
            <div className=" justify-between relative ">
              <IoLanguageOutline className="text-white mt-[3px] absolute top-[5px] left-[5px] pl-[5px]" />
              <select onChange={handleToggleLanguage} className=" bg-[rgb(45,45,45)] text-white pl-[22px] border border-1px-white  md:mr-[22px] mr-[12px] text-sm rounded h-[31px] pr-[8px] sm:w-[96px] w-[46px]">
                {SupportedLanguage.map(e => <option  key={e.identifier} value={e.identifier} className=" bg-white">{e.name}</option>)}
                
              </select> 
            </div>
               {/**             <svg className=" text-white absolute top-[5px] left-[5px] pl-[5px]" alt="" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
  */}
    
            <button onClick={handleClick} className=" rounded text-white w-[70px] font-semibold bg-red-600 h-[32px] hover:bg-[rgb(193,17,25)] duration-300"><p className=" text-sm">{lang[selectedLanguage].signinBtn}</p></button>
          </div>
       </div>
    ) 
}

export default Header

