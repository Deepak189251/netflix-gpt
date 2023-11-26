
const Header = () => {
    return (
       <div className=" absolute flex justify-between w-[100%]">
          <div className="logo-container ml-[140px] mt-[6px]">
            <img className=" w-44 h-18" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
          </div>
          <div className="signin-container mr-[170px] mt-[25px]">
             <button className=" rounded text-xs px-[12px] py-[6px] text-white w-[70px] font-semibold bg-red-600">Sign In</button>
          </div>
       </div>
    ) 
}

export default Header