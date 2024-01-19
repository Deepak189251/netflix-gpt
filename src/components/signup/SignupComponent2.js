//import { useState } from "react";
import SignupFooter from "./SignupFooter"
import SignupHeader from "./SignupHeader"
import { FaCheckCircle } from "react-icons/fa";
const SignupComponent2 = () => {

    //const [click, setClick] = useState()

    return (
        <div className=" absolute w-[1380px]">
            <SignupHeader />
            <div className=" w-[1080px] mx-[140px] mt-[50px]">
                <div className=" ">
                    <p className=" text-xs ">STEP <span className=" font-medium">2</span> OF <span className=" font-medium">3</span></p> 
                    <p className=" text-[1.875rem]/[2.575rem] font-semibold ">Choose the plan that’s right for you</p>
                </div>

                <form className=" flex mt-[50px] ">
                     <label className=" w-[261px] mr-[12px] border border-[rgba(128,128,128,0.7)] rounded-lg">
                        <input className=" peer hidden" type="radio" id="Premium" name="plan" />
                        <div className=" m-[8px] px-[14px] pt-[10px] bg-gradient-to-br from-[rgb(29,82,157)] to-[rgb(229,9,20)] pb-[22px] rounded-lg">
                            <p className=" text-white font-medium">Premium</p>
                            <p className=" text-white text-xs font-medium">4K + HDR</p> 
                         </div>
                         <FaCheckCircle style={{color: 'white'}} className=" absolute top-[297px] right-[1007px] hidden peer-checked:inline-block" />
                         <div className=" mt-[25px] mx-[20px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Monthly price</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[14px] font-medium">₹649</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Video and sound quality</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">Best</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Resolution</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">4K (Ultra HD) + HDR</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Spatial audio (immersive sound)</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">Included</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Supported devices</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">TV, computer, mobile phone, tablet</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Devices your household can watch at the same time</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">4</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Download devices</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">6</p>
                         </div>
                         
                        
                        
                     </label>
                     <label className=" w-[261px] mr-[12px] border border-[rgba(128,128,128,0.7)] rounded-lg">
                        <input className=" peer hidden" type="radio" id="Standard" name="plan" />
                        <div className=" m-[8px] px-[14px] pt-[10px] bg-gradient-to-br from-[rgb(29,82,157)] to-[rgb(176,56,220)]  pb-[22px] rounded-lg">
                            <p className="text-white font-medium">Standard</p>
                            <p className="text-white text-xs font-medium">1080p</p> 
                         </div>
                         <FaCheckCircle style={{color: "white"}} className=" absolute top-[297px] right-[735px] hidden peer-checked:inline-block" />
                         <div className=" mt-[25px] mx-[20px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Monthly price</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[14px] font-medium">₹499</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Video and sound quality</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">Great</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Resolution</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">1080p (Full HD)</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Supported devices</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">TV, computer, mobile phone, tablet</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Devices your household can watch at the same time</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">2</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Download devices</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">2</p>
                            
                         </div>
                         
                        
                        
                     </label>
                     <label className=" w-[261px] mr-[12px] border border-[rgba(128,128,128,0.7)] rounded-lg">
                        <input className=" peer hidden" type="radio" id="Standard" name="plan" />
                        <div className=" m-[8px] px-[14px] pt-[10px] bg-gradient-to-br from-[rgb(29,82,157)] to-[rgb(109,59,227)] pb-[22px] rounded-lg ">
                            <p className="text-white font-medium">Basic</p>
                            <p className="text-white text-xs font-medium">720p</p> 
                         </div>
                         <FaCheckCircle style={{color: "white"}} className=" absolute hidden peer-checked:inline-block top-[297px] right-[465px]" />
                         <div className=" mt-[25px] mx-[20px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Monthly price</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[14px] font-medium">₹199</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Video and sound quality</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">Good</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Resolution</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">720p (HD)</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Supported devices</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">TV, computer, mobile phone, tablet</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Devices your household can watch at the same time</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">1</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Download devices</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">1</p>
                            
                         </div>
                        
                     </label>
                     <label className=" w-[261px] mr-[12px] border border-[rgba(128,128,128,0.7)] rounded-lg">
                        <input className=" peer hidden" type="radio" id="Mobile" name="plan" />
                        <div className=" m-[8px] px-[14px] pt-[10px] bg-gradient-to-br from-[rgb(29,82,157)] to-[rgb(33,114,227)] pb-[22px] rounded-lg">
                            <p className="text-white font-medium">Mobile</p>
                            <p className="text-white text-xs font-medium">480p</p> 
                         </div>
                         <FaCheckCircle style={{color: "white"}} className=" absolute hidden peer-checked:inline-block top-[297px] right-[197px]" />
                         <div className=" mt-[25px] mx-[20px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Monthly price</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[14px] font-medium">₹149</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Video and sound quality</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">Fair</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Resolution</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">480p</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Supported devices</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">Mobile phone, tablet</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Devices your household can watch at the same time</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">1</p>
                            <hr className=" mt-[10px]"></hr>
                         </div>
                         <div className=" mt-[8px] mx-[20px] mb-[10px]">
                            <p className=" text-[rgb(118,118,118)] text-[11px] font-semibold">Download devices</p>
                            <p className=" text-[rgba(0,0,0,0.7)] text-[13px] font-medium">1</p>
                            
                         </div>
                        
                     </label>
                    
                    
                </form>

                <div className=" mt-[20px]">
                    <p className=" text-xs mb-[10px]">
                      HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
                    </p>
                    <p className=" text-xs">
                      Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
                    </p>
                </div>

                <button className=" w-[440px] h-[70px] bg-red-600 ml-[330px] mb-[140px] mt-[50px] rounded ">Next</button>
            </div>
            <SignupFooter />
        </div>
    ) 
}

export default SignupComponent2