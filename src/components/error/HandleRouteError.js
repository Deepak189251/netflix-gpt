import { useNavigate } from "react-router-dom"

export const HandleRouteError = ({error}) => {
    const navigate = useNavigate()
    console.log(error)
    const handleBtn = () => {
        navigate("browse")
    }
    return (
        <div className="error-page min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-red-600 mb-[16px]">Oops!!</h1>
          <p className="text-2xl text-gray-300 font-semibold">{"We couldn't find the page you are looking for"}</p>
          <button onClick={handleBtn} className=" bg-green-500 p-2 font-semibold text-base mt-[16px] rounded hover:bg-opacity-20" >Back to home</button>
        </div>
      </div>
    )
}