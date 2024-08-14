import {Link } from "react-router-dom"
//import SignupHeader from "./SignupHeader"
import SignupFooter from "./signup/SignupFooter"
import { EmailValidation, PasswordValidation } from "../utils/Validation"
import {  useRef, useState} from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, updateProfileOnSignup, db } from "../utils/Firebase"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/UserSlice"
//import { doc, setDoc, } from "firebase/firestore"; 
//import Header from "./Header"


const SignupComponent1 = () => {
    const dispatch = useDispatch()
    const [emailMessage, setEmailMessage] = useState()
    const [passMessage, setPassMessage] = useState()
   // const navigate = useNavigate()
    // use ref is a react hook which gives us the refrence of a value that's not needed to rendering
    const email = useRef(null)

    const password = useRef(null) 


   const handleForm = () => {
       
    
    const EmailResult = EmailValidation(email.current.value)
    setEmailMessage(EmailResult)
    console.log(email.current.value)


    
    const passResult = PasswordValidation(password.current.value)
    setPassMessage(passResult)
    console.log(password.current.value)



    //if emailresult and passresult is not null, which means is correnct then proceed further otherwise return from here.
    if(EmailResult || passResult) return ;

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential?.user;
        console.log(user)
<<<<<<< Updated upstream
        // navigate("/browse")
        /*const uname = email.current.value.slice(0,4)
        const userRef = doc(db, 'users', user.uid);
        setDoc(userRef, { name: uname, wishlist: [] }); */

        localStorage.setItem(user, [])
        dispatch(addUser({email:user.email, uid:user.uid})) 
=======
       // navigate("/browse")
        dispatch(addUser({email:user.email, uid:user.uid}))
>>>>>>> Stashed changes
        updateProfileOnSignup(user)
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
        setEmailMessage(errorMessage)
        // ..
    });
      
   }

    return (
        <div className=" signup-container absolute w-[100%] top-[140px]">
            
        
        <div className="  flex  md:mb-[150px] sm:mb-[120px] mb-[80px] w-[auto] justify-center items-center flex-col">
            
            
            
            
            <div className=" md:w-[440px] sm:w-[350px] w-[300px]"> 
            
                <div  className="">
                    <p className=" text-xs ">STEP <span className=" font-medium">1</span> OF <span className=" font-medium">3</span></p>
                    <p className=" sm:text-[1.975rem]/[2.575rem] text-[28px] font-semibold ">Create a password to start your membership</p>
                    <p className="  text-[17px] mt-[10px]">Just a few more steps and you're done!</p>
                    <p className="">We hate paperwork, too.</p>
                </div>

                <div className=" mt-[15px]">
                  <form>
                    {/**  */}
                     <input className=" w-[100%] h-[50px] mb-[16px] pl-[10px] rounded border border-[2px]-solid-black placeholder-[#8c8c8c]" ref={email} type="Email" placeholder="Email or phone number"></input>
                     <p className=" text-red-500 text-xs">{emailMessage}</p>
                     <input className=" w-[100%] h-[50px] mb-[16px] pl-[10px] rounded border border-[2px]-solid-black placeholder-[#8c8c8c] " ref={password} type="password" placeholder="Password"></input>
                     <p className=" text-red-500 text-xs">{passMessage}</p>

                     {/** this onsubmit and e.preventDefault is used to not refresh the page and submit when button is clicked */}
                     <Link> <button onSubmit={(e) => e.preventDefault}  onClick={handleForm} type="submit" className=" w-[100%] h-[60px] bg-red-600 text-white rounded text-xl">Next</button></Link>
                  </form>
                </div>
                
            </div>  
        </div>
        <SignupFooter/>
        </div>
    )
}

export default SignupComponent1