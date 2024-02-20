import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { updateProfile } from "firebase/auth"
import { auth } from "../utils/Firebase"
import { upload } from "../utils/Firebase"

const EditProfile = () => {
    const user = auth.currentUser
    const Name = useRef(null)
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(false)
    //const [userImg, setUserImg] = useState()
    const [userName, setUserName] = useState("Name")
    console.log(user)
    //const phone = useRef(null)

    const updateName = () => {

        updateProfile(auth.currentUser, {
            displayName: Name.current.value
            
          }).then(() => {
            // Profile updated!
            //console.log(user)
            alert("Name updated!")
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    const handleChange = (e) => {
       
        if(e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
        
    }

    const uploadImg = () => {

        upload(photo, user, setLoading)
    }

    useEffect(() => {
       
        
        user?.displayName != null && setUserName(user.displayName)
    }, [])
    

    return(
        <div className=" w-[100%] bg-gray-300 h-[500px]">
        <div className=" w-[800px] ml-[360px] h-[300px] border-[2px] absolute top-[84px] left-[10px]">
            <div>
                <p className=" text-2xl font-bold ml-[100px] mt-[20px] mb-[60px]">Edit Profile</p>
                  
                
                <div className="ml-[200px]" >
                    <input className="w-[203px]" type="file" onChange={handleChange}/>
                    <button disabled={loading || !photo} className=" rounded-md ml-[30px] bg-green-400 px-2 py-1" onClick={uploadImg}>upload</button>
                </div>

                <form className=" mt-[50px] ml-[200px]" >
                    <label className=" absolute top-[169px] ">Name</label>
                    <input className="outline-none border-none rounded h-[30px] w-[200px]" placeholder={userName} type="text" ref={Name} ></input>
                    
                   <Link to={"#"}><button className=" rounded-md ml-[30px] bg-green-400 px-2 py-1" onClick={updateName} onSubmit={(e) => (e.preventDefault())} type="submit" > Update</button></Link> 
                </form>

                
               
            </div>
        </div>
        </div>
    )
}

export default EditProfile