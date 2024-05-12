import { IoLanguageOutline } from "react-icons/io5";
const Footer = () => {

    return (
        <div className="">
            <div className="pt-[50px] pb-[50px] w-[100%] bg-black text-white">
                <div className=" w-auto lg:px-[80px] px-[30px] flex flex-col">
                    <div>Questions? Call 000-800-919-1694</div>
                    <div className=" flex md:flex-col flex-row justify-between">
                        <div className=" flex flex-col md:block">
                            <div className=" w-[100%]  text-[13px]  flex justify-between md:flex-row flex-col">
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">FAQ</h4>
                                <h4 className="sm:w-[150px] w-[140px] font-normal mt-[16px]">Help Centre</h4>
                                <h4 className="sm:w-[150px] w-[140px] font-normal mt-[16px]">Account</h4>
                                <h4 className="sm:w-[150px] w-[140px] font-normal mt-[16px]">Media Centre</h4>
                            </div>
                            <div className=" w-[100%] flex justify-between md:flex-row flex-col">
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Investor Relations</h4>
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Jobs</h4>
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Ways to Watch</h4>
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Terms of Use</h4>
                            </div>
                        </div>
                        <div className=" flex flex-col md:block">
                            <div className=" w-[100%] flex justify-between md:flex-row flex-col">
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Privacy</h4>
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Cookie Preferences</h4>
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Corporate Information</h4>
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Contact Us</h4>
                            </div>
                            <div className=" w-[100%] flex justify-between md:flex-row flex-col">
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Speed Test</h4>
                                <h4 className="sm:w-[150px] w-[140px] text-[13px] font-normal mt-[16px]">Legal Notices</h4>
                                <h4 className="sm:w-[150px] w-[140px]  text-[13px] font-normal mt-[16px]">About us</h4>
                                <h4 className="sm:w-[150px] w-[140px]  text-[13px] font-normal mt-[16px]">Only on Netflix</h4>
                            </div>
                        </div>
                      
                        
                    </div>
                    
                    <div className=" justify-between relative top-[25px] ">
                      <IoLanguageOutline className="text-white absolute top-[5px] left-[5px] pl-[5px]" />        
                    
                      <select className=" bg-[rgb(45,45,45)] text-white pl-[22px] border border-1px-white  mr-[22px] text-sm rounded  pb-[5px] pr-[8px] pt-[2px]">
                 
                            <option className=" bg-white">English </option>
                            <option className=" bg-white">Hindi </option>
                         </select> 
                    </div>
                
                    <div className=" mt-[50px] text-[13px] font-light"> Netflix India</div>
                </div>
            </div>
        </div>
    )
}

export default Footer