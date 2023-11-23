
const Header = () => {
    return (
       <div className=" absolute flex justify-between w-[100%]">
          <div className="logo-container ml-[140px] mt-[7px]">
            <img className=" w-44 h-18" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
          </div>
          <div className="signin-container mr-[160px] mt-[15px]">
             <button className=" rounded-md text-sm text-white w-[70px] h-8 bg-red-600">Sign In</button>
          </div>
       </div>
    ) 
}

export default Header