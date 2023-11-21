import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/LogIn";
import Browse from "./components/Browse";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children : [
         {
          path: "/Login",
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
