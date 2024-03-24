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

const Login = () => {
  // const dispatch = useDispatch()
  //const {state:{users}, dispatch} = UserState()
  //const navigate = useNavigate()
   const Email = useRef(null);
   const Password = useRef(null);
   

   const handleLogin = () => {
 
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
   

  /* const handleLogin = () => {

      console.log()

   }*/

    return (

      <div>
        <div className=" w-[100%]  h-[958px] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
           <div className=" w-[100%] h-[100%] bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]">
           
             <div className=" absolute w-[430px] top-[140px] h-[660] px-[68px] py-[60px] left-[560px] bg-[rgba(0,0,0,.75)] rounded-sm">
                <div className="   text-white">
                   <h1 className=" text-[30px] font-medium mb-[28px]">Sign In</h1>
                   <form onSubmit={(e) => e.preventDefault()}>
                     <input className=" w-[100%] h-[50px] mb-[16px] pl-[10px] rounded placeholder-[#8c8c8c] bg-[#333]" ref={Email}  type="Email" placeholder="Email or phone number"></input>
                     <input className=" w-[100%] h-[50px] mb-[16px] pl-[10px] rounded placeholder-[#8c8c8c] bg-[#333]" ref={Password}  type="password" placeholder="Password"></input>
                     <button  onClick={handleLogin} className=" w-[100%] h-[50px] mb-[16px] rounded bg-red-600 hover:bg-[rgb(193,17,25)] duration-300" >Sign In</button>
                     
                     <div className=" w-[100%] flex justify-between">
                       <div >
                          <input type="checkbox" id="save-info" name="save-info"/>
                          <label className=" text-[#8c8c8c]" for="save-info">Remember me</label>
                       </div>
                        <p className=" text-[#8c8c8c]">Need help?</p>
                     </div>
                   </form>

                   <p className=" mt-[30px] text-[#737373]">New to Netflix? <Link to={"/"}><span className=" text-white">Sign up now </span> </Link> </p>

                   <p className=" text-[#8c8c8c] mt-[15px] text-xs">Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.</p>

                </div>
            
 
             </div>
             <footer className=" absolute w-[100%] h-[250px] bg-[rgba(0,0,0,.75)] text-[#737373] mt-[80px] top-[630px]">
               <div className="w-[1000px] pt-[30px] pb-[30px] mr-[259px] ml-[259px]">
                  <div className="1st-row pb-[15px]">Questions? Call 000-800-919-1694</div>
                  <div className="footer-body">
                  <div className=" flex">
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">FAQ</h4>
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Help Centre</h4>
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Terms of Use</h4>
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Privacy</h4>
                    
                  </div> 
                  <div className=" flex ">
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Cookie Preferences</h4>
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Corporate Information</h4>
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