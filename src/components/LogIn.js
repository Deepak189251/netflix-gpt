import { Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/Firebase"
import { useRef } from "react"
//import Header from "./Header"
//import { useDispatch } from "react-redux"
//import { addUser } from "../utils/UserSlice"
//import { UserState } from "../utils/Context"
import { signInWithPopup, GoogleAuthProvider, signInAnonymously } from "firebase/auth";
const Login = () => {
  // const dispatch = useDispatch()
  //const {state:{users}, dispatch} = UserState()
  //const navigate = useNavigate()
   const Email = useRef(null);
   const Password = useRef(null);
   const provider = new GoogleAuthProvider();

   const handleLoginWithEmail = () => {
 
      signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
         .then((userCredential) => {
         // Signed in 
        /*console.log("signin sucessfully")
           const user = userCredential.user;
             const {uid, email} = user

            dispatch({
               type: "Add",
               payload: user
            }) 
            
           // console.log(user)
           // navigate("/browse")
           // dispatch(addUser(user)) 
           
            console.log(user) 

            // ...
            */
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log( errorCode + errorMessage)
         });

   }
   

   const handleLoginWithGoogle = () => {
    


   signInWithPopup(auth, provider)
      .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
    // The signed-in user info.
      const user = result.user;
      console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
   }


   const handleLoginAsGuest = () => {
     

      
      signInAnonymously(auth)
      .then(() => {
         // Signed in..
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         // ...
      });
   }

  /* const handleLogin = () => {

      console.log()

   }*/

    return (

      <div className="">
        <div className=" w-[100%]  md:h-[970px] h-[1015px] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
           <div className=" w-[100%] h-[100%] bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]">
           
             <div className=" absolute md:w-[430px] sm:w-[370px] w-[300px] top-[140px] h-[660] md:px-[68px] sm:px-[50px] px-[35px] md:py-[60px] sm:py-[50px] py-[35px] left-0 right-0 m-auto bg-[rgba(0,0,0,.75)] rounded-sm">
                <div className="   text-white">
                   <h1 className=" sm:text-[30px] text-[28px] font-medium mb-[28px]">Sign In</h1>
                   <form onSubmit={(e) => e.preventDefault()}>
                     <input className=" w-[100%] h-[50px] mb-[16px] pl-[10px] rounded placeholder-[#8c8c8c] bg-[#333]" ref={Email}  type="Email" placeholder="Email or phone number"></input>
                     <input className=" w-[100%] h-[50px] mb-[16px] pl-[10px] rounded placeholder-[#8c8c8c] bg-[#333]" ref={Password}  type="password" placeholder="Password"></input>
                     <button  onClick={handleLoginWithEmail} className=" w-[100%] h-[50px] mb-[16px] rounded bg-red-600 hover:bg-[rgb(193,17,25)] duration-300" >Sign In</button>
                     
                     <div className=" w-[100%] flex justify-between">
                       <div >
                          <input type="checkbox" id="save-info" name="save-info"/>
                          <label className=" text-[#8c8c8c]" for="save-info">Remember me</label>
                       </div>
                        <p className=" text-[#8c8c8c]">Need help?</p>
                     </div>
                   </form>

                   <div onClick={handleLoginWithGoogle} className="w-[100%] h-[40px] pt-[3px] cursor-pointer  flex bg-gray-100 mt-[15px] text-black justify-center text-center rounded font-semibold ">
                     <img alt="logo" className=" w-[34px] h-[35px] mt-[1px]" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>
                     <p className=" mt-[5px] ml-[5px]">Sign in with Google</p>
                   </div>

                   <div onClick={handleLoginAsGuest} className="w-[100%] h-[40px] pt-[3px] cursor-pointer  flex bg-blue-300 mt-[15px] text-black justify-center text-center rounded font-semibold ">
                     <p className=" mt-[5px] ml-[5px]">Continue as Guest</p>
                   </div>

                   <p className=" mt-[30px] text-[#737373]">New to Netflix? <Link to={"/signup-form"}><span className=" text-white">Sign up now </span> </Link> </p>

                   <p className=" text-[#8c8c8c] mt-[15px] text-xs">Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.</p>

                </div>
            
 
             </div>
             <footer className=" absolute w-[100%] md:h-[250px] h-[295px] bg-[rgba(0,0,0,.75)] text-[#737373] left-0 right-0 m-auto top-[720px]">
               <div className="w-[100%] pt-[30px] pb-[30px] lg:px-[80px] px-[30px]">
                  <div className="1st-row pb-[15px]">Questions? Call 000-800-919-1694</div>
                  <div className="footer-body flex md:flex-col flex-row justify-between">
                     <div className=" flex justify-between md:flex-row flex-col">
                        <h4 className=" sm:w-[150px] w-[130px] text-[12px] font-normal mt-[16px]">FAQ</h4>
                        <h4 className=" sm:w-[150px] w-[130px] text-[12px] font-normal mt-[16px]">Help Centre</h4>
                        <h4 className=" sm:w-[150px] w-[130px] text-[12px] font-normal mt-[16px]">Terms of Use</h4>
                        <h4 className=" sm:w-[150px] w-[130px] text-[12px] font-normal mt-[16px]">Privacy</h4>
                    
                     </div> 
                     <div className=" flex justify-between md:flex-row flex-col">
                        <h4 className=" sm:w-[150px] w-[130px] text-[12px] font-normal mt-[16px]">Cookie Preferences</h4>
                        <h4 className=" sm:w-[150px] w-[130px] text-[12px] font-normal mt-[16px]">Corporate Information</h4>
                        <h4 className=" sm:w-[150px] w-[130px] text-[12px] font-normal mt-[16px]">Media Center</h4>
                        <h4 className=" sm:w-[150px] w-[130px] text-[12px] font-normal mt-[16px]">About Us</h4>
                     </div>
                  </div>
                  <div className=" justify-between relative mt-[30px] ">
                     <FontAwesomeIcon icon={faGlobe} color="white" className="text-white absolute top-[5px] left-[5px] pl-[5px] mr-[5px] mt-[4px]" />
                     <select className=" bg-black text-white pl-[29px] border border-1px-white  mr-[22px] rounded  pb-[5px] pr-[8px] pt-[6px] font-light text-xs">
                
                        <option className=" bg-white font-light text-xs">English </option>  
                        <option className=" bg-white font-light text-xs">Hindi </option>
                     </select> 
                  </div>
              </div>
            </footer>  
         </div> 
       </div>
      </div>
    )
}


export default Login