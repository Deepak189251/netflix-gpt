import { Link } from "react-router-dom"
const SignupHeader = () => {

    return(
        <div className=" flex justify-between w-[100%] border border-[1px]-black">
            <div className=" ml-[40px] mt-[6px]">
              <img className=" w-44 h-18" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

            </div>
            <div>
                 <Link to={"/login"}><p className=" text-lg font-semibold mr-[45px] mt-[22px]">Sign in</p></Link>
            </div>
        </div>
    )
}

export default SignupHeader