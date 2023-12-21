import { useState } from "react";
import Data from "../utils/Faq-Data";
import FAQ from "./FAQ";
import {SlArrowRight} from "react-icons/sl";
const FaqSection = () => {

   const [value, setValue] = useState(false);
   const [findex, setFindex] = useState(null);

   const changeValue =  (index, value) => {
      
       setValue(!value)
       setFindex(index)
   }

    return(
        <div>
            <div className="container-faq text-white bg-black w-[1381px] pt-[50px] pb-[60px]">
                <div className=" w-[1061px] ml-[160px] mr-[160px]">
                    <h1 className="text-[43px] font-extrabold text-center mb-[25px]">Frequently Asked Questions</h1>
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
                     <div className=" text-white mt-[20px]" >
              <p className=" text-xl font-normal text-center">Ready to watch? Enter your email to create or restart your membership.</p>
             
              <form className=" flex justify-between mt-[13px]">
              <div className=" bg-black w-[374px] h-[56px] ml-[239px] border rounded text-left pb-2">
                 <lebel className="ml-[10px] text-xs mt-0 text-[rgba(255,255,255,0.7)]">Email address</lebel>
                 <div className="  ml-[10px] mb-[5px]">
                    <input type="email" className="bg-transparent" ></input>
                 </div>  
              </div>
              <button type="submit" className=" bg-red-600 w-[203px] h-[56px] mr-[240px] text-2xl font-semibold rounded text-left pl-3 flex pt-2">Get started <SlArrowRight className=" pl-[10px] pt-[6px] text-3xl font-extrabold"/> </button>
              </form>
            </div>
                     
                </div>
            </div>
            <div className=" divider w-[1381px] h-[8px] bg-[rgb(35,35,35)]"></div>
        </div>
    )
}

export default FaqSection