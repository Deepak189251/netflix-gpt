import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/LogIn";
//import Browse from "./components/Browse";
import SignupComponent1 from "./components/SignupComponent1";
//import SignupComponent2 from "./components/signup/SignupComponent2";
import Header from "./components/Header";
import EditProfile from "./components/EditProfile";
import MovieInfo from "./components/MovieInfo";
//import { useDispatch } from "react-redux";
//import { useEffect } from "react";
//import { auth } from "./utils/Firebase";
//import { onAuthStateChanged } from "firebase/auth";
//import { addUser, removeUser } from "./utils/UserSlice";
//import UserContext from "./utils/Context";
//import { UserState } from "./utils/Context";
//import ProtectedRoute from "./utils/ProtectedRoute";
import GptSuggestion from "./components/GptSuggestion";
import WishList from "./components/WishList";
import { ErrorBoundary } from "react-error-boundary";
import { HandleInternalError} from "./components/error/HandleError"
import { HandleRouteError } from "./components/error/HandleRouteError";
const Applayout = () => {



  return(
    
      <div className="app">
       <ErrorBoundary FallbackComponent={HandleInternalError}>
          <Header/>
          <Outlet/>
        </ErrorBoundary>
      </div> 
    

    
  )
}


function App() {
  
  
   
 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <HandleRouteError /> ,
      children : [
        {
          path: "",
          element: <LandingPage />
        },
        {
          path: "/login",
          element: <Login /> 
        },
        {
          path: "/signup-form",
          element: <SignupComponent1 />
        },
        {
          path: "/profile",
          element: <EditProfile />
        },
        {
          path: "/movie/:resId",
          element: <MovieInfo/>
        },
        {
          path: "/search",
          element: <GptSuggestion/>
        },
        {
          path: "/wishlist",
          element: <WishList />
        }
      ]
    },
    
   
    
  ]) 

  



  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
