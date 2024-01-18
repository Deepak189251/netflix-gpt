import Header from "./Header"
 import LandingPageComp1 from "./LandingPageComp1";
 import LandingPageComp2 from "./LandingPageComp2";
 import LandingPageComp3 from "./LandingPageComp3";
 import LandingPageComp4 from "./LandingPageComp4";
 import FaqSection from "./FaqSection";
 import Footer from "./Footer";
 import {SlArrowRight} from "react-icons/sl";
 import { Link } from "react-router-dom";
 const LandingPage = () => {
    return (
   <div className="container">
     <div className=" bg-center bg-cover w-[1381px] h-[630px] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
     
      
      <div className=" w-[100%] h-[100%] bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]">
        <Header />
        <div className=" flex  absolute mt-[250px] justify-center w-[100%]">
          <div className=" text-white  text-center ">
            <div>
              <h1 className=" text-[43px] font-extrabold">Laughter. Tears. Thrills. Find it all on Netflix.</h1>
              <p className=" mt-[13px] text-2xl font-normal">Endless entertainment starts at just ₹149. Cancel anytime.</p>
            </div>
            {/**Laughter. Tears. Thrills. Find it all on Netflix.    ml-[220px] mr-[220px]*/}
            <div className=" text-white mt-[16px]" >
              <p className=" text-xl font-normal">Ready to watch? Enter your email to create or restart your membership.</p>
             
              <form className=" flex justify-between mt-[13px]">
             
                 
                 <div className="">
                    <input type="email" className=" mb-[5px]  bg-black w-[374px] h-[56px] ml-[190px] border rounded text-left pb-2 pl-3" placeholder="Email address"></input>
                 </div>  
            
               <Link to={"/signup-form"}><button type="submit" className=" bg-red-600 w-[203px] h-[56px] mr-[180px] text-2xl font-semibold rounded text-left pl-3 flex pt-2 hover:bg-[rgb(193,17,25)] duration-300">Get started <SlArrowRight className=" pl-[10px] pt-[6px] text-3xl font-extrabold"/> </button></Link> 
              </form>
            </div>
         </div>
         
        </div>  

        
  
      </div>
      
     </div>
    <div className=" divider w-[1381px] h-[8px] bg-[rgb(35,35,35)]"></div>
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