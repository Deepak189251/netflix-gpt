 //import Header from "./Header"
 import LandingPageComp1 from "./LandingPageComp1";
 import LandingPageComp2 from "./LandingPageComp2";
 import LandingPageComp3 from "./LandingPageComp3";
 import LandingPageComp4 from "./LandingPageComp4";
 import FaqSection from "./FaqSection";
 import Footer from "./Footer";
 import {SlArrowRight} from "react-icons/sl";
 import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { lang } from "../utils/LanguageConstants";
//import { useEffect, useState } from "react";
 const LandingPage = () => {
   
  const selectedLanguage = useSelector(store => store?.config?.preferedLanguage)
  

    return (
   <div className="landingpage-container w-[1519px]">
     <div className=" bg-center bg-cover w-[100%] h-[630px] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
     
      
      <div className=" w-[100%] h-[100%] bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]">
       
        <div className=" flex  absolute mt-[250px] justify-center w-[100%]">
          <div className=" text-white  text-center ">
            <div>
              <h1 className=" xl:text-[43px] xl:font-extrabold md:text-[34px] font-bold  sm:text-[26px] text-[22px]">{lang[selectedLanguage].landingHeader}</h1>
              <p className=" xl:mt-[13px] xl:text-2xl sm:font-normal font-medium mt-[6px] md:text-xl sm:text-lg text-base">{lang[selectedLanguage].landingHeader2}</p>
            </div>
            {/**Laughter. Tears. Thrills. Find it all on Netflix.    ml-[220px] mr-[220px]*/}
            <div className=" text-white xl:mt-[16px] mt-[8px]" >
              <p className=" xl:text-xl md:text-lg sm:text-base text-sm sm:font-normal font-medium">{lang[selectedLanguage].landingHeader3}</p>
             
              <form className=" flex mt-[13px] justify-center">
             
                 
                 <div className="">
                    <input type="email" className=" mb-[5px]  bg-black xl:w-[374px] xl:h-[56px] md:w-[330px] md:h-[50px] sm:w-[270px] sm:h-[45px] w-[220px] h-[40px] text-white-[20px] border rounded text-left pb-2 pl-3" placeholder="Email address"></input>
                 </div>  
            
               <Link to={"/signup-form"}><button type="submit" className=" bg-red-600 xl:w-[203px] xl:h-[56px] md:h-[50px] md:w-[160px] sm:h-[45px] sm:w-[120px] h-[40px] w-[100px] ml-[10px] xl:text-2xl md:text-xl sm:text-base text-sm md:font-semibold font-medium rounded text-left  flex  hover:bg-[rgb(193,17,25)] duration-300"><span className=" md:ml-[12px] md:mt-[10px] sm:ml-[8px] sm:mt-[8px] ml-[6px] mt-[7px]">{lang[selectedLanguage].signupBtn}</span><span className="md:ml-[10px] md:mt-[15px] sm:ml-[8px] sm:mt-[13px] ml-[5px] mt-[10px]"><SlArrowRight className="  xl:w-[24px] xl:h-[22px] md:w-[18px] md:h-[18px] w-[14px] h-[15px] font-extrabold"/></span> </button></Link> 
              </form>
            </div>
         </div>
         
        </div>  

        
  
      </div>
      
     </div>
    <div className=" divider w-[100%] h-[8px] bg-[rgb(35,35,35)]"></div>
    <LandingPageComp1 />
    <LandingPageComp2 />
    <LandingPageComp3 />
    <LandingPageComp4 />
    <FaqSection />
    <Footer />
   </div>  

    )
}

export default LandingPage