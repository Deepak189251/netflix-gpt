import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/LogIn";
import Browse from "./components/Browse";
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
