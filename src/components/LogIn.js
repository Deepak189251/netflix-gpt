import { Link } from "react-router-dom"
const Login = () => {
    return (

      <div>
        <div className=" w-[1381px] h-[920px] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
           <div className=" w-[100%] h-[100%] bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]">
             <header className="login-header">
                <img className=" w-44 h-18 ml-[20px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" /> 
             </header>
             <div className=" w-[430px] h-[660] px-[68px] py-[60px] ml-[475px] bg-[rgba(0,0,0,.75)] rounded-sm">
                <div className="  text-white">
                   <h1 className=" text-[30px] font-medium mb-[28px]">Sign In</h1>
                   <form>
                     <input className=" w-[100%] h-[50px] mb-[16px] pl-[10px] rounded placeholder-[#8c8c8c] bg-[#333]" type="Email" placeholder="Email or phone number"></input>
                     <input className=" w-[100%] h-[50px] mb-[16px] pl-[10px] rounded placeholder-[#8c8c8c] bg-[#333]" type="password" placeholder="Password"></input>
                     <button className=" w-[100%] h-[50px] mb-[16px] rounded bg-red-600" type="submit">Sign In</button>
                     
                     <div className=" w-[100%] flex justify-between">
                       <div >
                          <input type="checkbox" id="save-info" name="save-info"/>
                          <label className=" text-[#8c8c8c]" for="save-info">Remember me</label>
                       </div>
                        <p className=" text-[#8c8c8c]">Need help?</p>
                     </div>
                  </form>

                  <p className=" mt-[30px] text-[#737373]">New to Netflix? <Link to={"/"}><span className=" text-white">Sign up now </span> </Link> </p>

                  <p className=" text-[#8c8c8c] mt-[15px] text-xs">Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.</p>

               </div>
            

          </div>
          <footer className=" w-[100%] h-[250px] bg-[rgba(0,0,0,.75)] text-[#737373] mt-[80px]">
            <div className="w-[1000px] pt-[30px] pb-[30px] mr-[259px] ml-[259px]">
             <div className="1st-row pb-[15px]">Questions? Call 000-800-919-1694</div>
             <div className="footer-body">
                 <div className=" flex">
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">FAQ</h4>
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Help Centre</h4>
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Terms of Use</h4>
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Privacy</h4>
                    
                 </div>
                 <div className=" flex">
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Cookie Preferences</h4>
                    <h4 className=" w-[250px] text-[12px] font-normal mt-[16px]">Corporate Information</h4>
                 </div>
             </div>
             <div className=" justify-between relative mt-[30px] ">
            <svg className=" text-white absolute top-[5px] left-[5px] pl-[5px]" alt=""  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
              <select className=" bg-[rgb(45,45,45)] text-white pl-[22px] border border-1px-white  mr-[22px] text-sm rounded  pb-[5px] pr-[8px] pt-[2px]">
                
                <option className=" bg-white">English </option>  
                <option className=" bg-white">Hindi </option>
              </select> 
            </div>
            </div>
          </footer>
         </div>
       </div>
      </div>
    )
}


export default Login