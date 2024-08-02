import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
const SignupFooter = () => {

    return (
        
            <footer className=" w-[100%] h-auto bg-[#f3f3f3] text-[#737373] ">
               <div className="w-[100%] pt-[30px] pb-[20px] lg:px-[80px] px-[30px] flex flex-col">
                  <div className="1st-row pb-[15px]">Questions? Call 000-800-919-1694</div>
                  <div className="footer-body flex md:flex-col flex-row justify-between">

                  <div className=" w-[100%] flex justify-between md:flex-row flex-col">
                    <h4 className=" w-[150px] text-[12px] font-normal mt-[16px]">FAQ</h4>
                    <h4 className=" w-[150px] text-[12px] font-normal mt-[16px]">Help Centre</h4>
                    <h4 className=" w-[150px] text-[12px] font-normal mt-[16px]">Netflix Shop</h4>
                    <h4 className=" w-[150px] text-[12px] font-normal mt-[16px]">Terms of Use</h4>
                  </div> 

                  <div className=" w-[100%] flex justify-between md:flex-row flex-col">
                    <h4 className=" w-[150px] text-[12px] font-normal mt-[16px]">Privacy</h4>
                    <h4 className=" w-[150px] text-[12px] font-normal mt-[16px]">About Us</h4>
                    <h4 className=" w-[150px] text-[12px] font-normal mt-[16px]">Cookie Preferences</h4>
                    <h4 className=" w-[150px] text-[12px] font-normal mt-[16px]">Corporate Information</h4>
                  </div>
               </div>
               <div className=" justify-between relative mt-[30px] ">
                   <FontAwesomeIcon icon={faGlobe} className="text-black absolute top-[5px] left-[5px] pl-[5px] mr-[5px] mt-[4px]" />
                   <select className=" text-black pl-[29px] border border-1px-white  mr-[22px] rounded  pb-[5px] pr-[8px] pt-[6px] font-light text-xs">
                
                      <option className=" bg-white font-light text-xs">English </option>  
                      <option className=" bg-white font-light text-xs">Hindi </option>
                   </select> 
               </div>
              </div>
            </footer>  

    )
}

export default SignupFooter