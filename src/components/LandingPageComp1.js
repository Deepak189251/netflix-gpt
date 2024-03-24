const LandingPageComp1 = () => {

    return (
        <div className="  text-white">
          <div className="container-comp1 bg-black w-[100%] h-auto pt-[50px] pb-[50px]" >
           <div className="  md:flex sm:flex-row sm:justify-between md:justify-center ">
              <div className=" xl:w-[525px] lg:w-[420px] md:w-[330px] md:pr-[12px] md:pt-[154px] md:pb-[154px] mx-[15px] text-center">
                 <h1 className=" xl:text-[43px] lg:text-[40px] text-[35px]  font-extrabold">Enjoy on your TV</h1>
                 <p className="lg:text-[22px] md:text-[19px] text-[17px] ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
             </div >
             <div className=" xl:w-[525px] lg:w-[420px] md:w-[330px] sm:w-[460px] sm:h-[350px] w-[330px] h-[290px]  md:pl-[10px] lg:bottom-[15px] md:bottom-[8px] bottom-[60px] md:m-0 m-auto  relative text-center ">
              
                <img className= " xl:h-[394px] xl:w-[519px] lg:w-[410px] lg:h-[310px] md:w-[320px]  md:h-[250px] sm:w-[440px] sm:h-[320px] w-[320px] h-[250px] xl:top-[25px] top-[90px] bottom-[19px] z-[1] absolute md:left-0 sm:left-0 left-[0px]" alt="tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="nmhp-card-animation-asset-image"/>
                <video className=" absolute xl:w-[374px] lg:w-[320px] md:w-[275px] sm:w-[335px] w-[275px]  bottom-[52px] xl:left-[80px] lg:left-[57px] md:left-[42px] left-[55px] xl:h-[211px] lg:h-[174px] md:h-[140px] sm:h-[184px] h-[140px] xl:top-[109px] md:top-[143px] top-[149px]" data-uia="nmhp-card-animation-asset-video" autoPlay muted loop ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/></video>
              
             </div>
           </div> 
          </div>
            <div className=" divider w-[1381px] h-[8px] bg-[rgb(35,35,35)]"></div>
        </div>
    )
}

export default LandingPageComp1