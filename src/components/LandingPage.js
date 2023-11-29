 import Header from "./Header"
 const LandingPage = () => {
    return (
    <div className=" bg-center bg-cover w-[100%] h-[100vh] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
     
      
      <div className=" w-[100%] h-[100vh] bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]">
        <Header />

        <div className=" text-white absolute mt-[250px] ml-[220px] text-center">
           <div>
            <h1 className=" text-[43px] font-extrabold">Laughter. Tears. Thrills. Find it all on Netflix.</h1>
            <p className=" mt-[15px] text-2xl font-normal">Endless entertainment starts at just ₹ 149. Cancel anytime.</p>
          </div>

          <div className=" text-white mt-[15px]" >
            <p className=" text-xl font-normal">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className=" mt-[15px]">
               <input type="email" className=" bg-black border-[1px] border-white px-20px py-20px" ></input>
               <button type="submit" className=" bg-red-600">Get started.</button>
            </form>
          </div>
        </div>  

        
  
      </div>
      
    </div>
    )
}

export default LandingPage