//import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeUser } from "../utils/UserSlice"
//import { UserState } from "../utils/Context"
import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../utils/Firebase"


const Browse = () => {
   // const navigate = useNavigate()
    //const {state: {users}, dispatch} = UserState()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    console.log(user)
     
    const handleSignout = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        /* dispatch({
          type: "Remove",
        })*/
        
        //navigate('/')
        dispatch(removeUser())
        console.log("signout successfully")
      }).catch((error) => {
        // An error happened.
      });
        
        
        //dispatch(removeUser())
       
        


    }

    
    return (
    <div className=" absolute top-[100px]">
        <div>
          this is browse
        </div>
        <div>
          <button onClick={handleSignout}>signout</button>
        </div>
    </div>)
}

export default Browse