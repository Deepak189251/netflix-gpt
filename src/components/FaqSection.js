import { useState } from "react";
import Data from "../utils/Faq-Data";
import FAQ from "./FAQ";
import {SlArrowRight} from "react-icons/sl";
import { Link } from "react-router-dom";
const FaqSection = () => {

   const [value, setValue] = useState(false);
   const [findex, setFindex] = useState(null);

   const changeValue =  (index, value) => {
      
       setValue(!value)
       setFindex(index)
   }

    return(
        <div>
            <div className="container-faq text-white bg-black w-[100%] pt-[50px] pb-[60px]">
                <div className="w-[auto] flex flex-col items-center">
                    <h1 className="lg:text-[43px] md:text-[40px] sm:text-[34px] text-[30px]  sm:font-extrabold font-bold text-center sm:mb-[25px] mb-[35px]">Frequently Asked Questions</h1>
                    <div className=" xl:w-[1200px] lg:w-[950px] md:w-[740px] sm:w-[480px] w-[290px] h-[auto]">   
                        {Data.map((res, index) => {
                            console.log(res)
                            return (
                                <FAQ 
                                    key={index}
                                    data={res} 
                                    serielnum={index}
                                    value={index === findex ? value : false}
                                    changeValue = {changeValue}
                                />
                            )
                        })}
                    </div>
                    <div className=" w-[100%] text-white mt-[20px]" >
                        <p className=" text-xl font-normal text-center px-[10px]">Ready to watch? Enter your email to create or restart your membership.</p>
             
                        <form className=" flex sm:mt-[13px] mt-[20px] justify-center">
             
                 
                            <div className="">
                                <input type="email" className=" mb-[5px]  bg-black xl:w-[374px] xl:h-[56px] md:w-[330px] md:h-[50px] sm:w-[270px] sm:h-[45px] w-[200px] h-[40px] text-white-[20px] border rounded text-left pb-2 pl-3" placeholder="Email address"></input>
                            </div>  
        
                            <Link to={"/signup-form"}><button type="submit" className=" bg-red-600 xl:w-[203px] xl:h-[56px] md:h-[50px] md:w-[160px] sm:h-[45px] sm:w-[120px] h-[40px] w-[90px] ml-[10px] xl:text-2xl md:text-xl sm:text-base text-[12px] md:font-semibold font-medium rounded text-left  flex  hover:bg-[rgb(193,17,25)] duration-300"><span className=" md:ml-[12px] md:mt-[10px] sm:ml-[8px] sm:mt-[8px] ml-[6px] mt-[9px]">Get Started</span><span className="md:ml-[10px] md:mt-[15px] sm:ml-[8px] sm:mt-[13px] ml-[3px] mt-[12px]"><SlArrowRight className="  xl:w-[24px] xl:h-[22px] md:w-[18px] md:h-[18px] sm:w-[14px] sm:h-[15px] font-extrabold"/></span> </button></Link> 
                        </form>
                    </div>
                     
                </div>
            </div>
            <div className=" divider w-[100%] h-[8px] bg-[rgb(35,35,35)]"></div>
        </div>
    )
}

export default FaqSection