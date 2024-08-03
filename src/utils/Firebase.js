// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
//import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZPSKZAUxp0r5_fEUHTmLdQnzpgb06lCY",
  authDomain: "netflixgpt-1e1f7.firebaseapp.com",
  projectId: "netflixgpt-1e1f7",
  storageBucket: "netflixgpt-1e1f7.appspot.com",
  messagingSenderId: "111167897984",
  appId: "1:111167897984:web:7f0a60b12d075955708165",
  measurementId: "G-EHKZYJRPV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage()
console.log(analytics)

export const auth = getAuth()

/*export const useAuth = () => {

  const [currentUser, setCurrentUser] = useState ();

  return
}*/

export async function upload (file, currentUser, setLoading){



  const fileRef = ref(storage, currentUser.uid + '.jpg')
  

  setLoading(true)
  const snapshot = await uploadBytes(fileRef, file)
  const photoUrl = await getDownloadURL(fileRef)
  console.log(photoUrl)

  updateProfile(currentUser, {
    photoURL: photoUrl
    
  }).then(() => {
    // Profile updated!
    console.log(currentUser)
    // ...
  }).catch((error) => {
    // An error occurred
    console.log(error)
    // ...
  });
  setLoading(false)
  
  alert("file Uploaded!")

}

export const updateProfileOnSignup = (user) => {

  updateProfile(user, {
    photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
    
  }).then(() => {
    // Profile updated!
    console.log(user)
    // ...
  }).catch((error) => {
    // An error occurred
    console.log(error)
    // ...
  });


}