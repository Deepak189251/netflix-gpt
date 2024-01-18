import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/LogIn";
import Browse from "./components/Browse";
import SignupComponent1 from "./components/signup/SignupComponent1";
import SignupComponent2 from "./components/signup/SignupComponent2";
const Applayout = () => {
  
  return(
    <div className="app">
       <Outlet/>
    </div>
  )
}


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children : [
        {
          path: "/",
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
          path: "/signup-plan",
          element: <SignupComponent2 />
        }
      ]
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
