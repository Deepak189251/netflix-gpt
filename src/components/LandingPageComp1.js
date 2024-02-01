const LandingPageComp1 = () => {

    return (
        <div className="  text-white">
          <div className="container-comp1 bg-black w-[100%] h-[538px] pt-[50px] pb-[50px]" >
           <div className=" w-[1061px] h-[438px]  ml-[160px] mr-[160px] flex">
              <div className=" w-[525px] pr-[12px] pt-[154px] pb-[154px]">
                 <h1 className=" text-[43px] font-extrabold">Enjoy on your TV</h1>
                 <p className=" text-[22px]">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
             </div >
             <div className=" w-[525px] pl-[10px] relative">
               <img className= " h-[394px] w-[519px] bottom-[19px] z-[1] absolute" alt="tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="nmhp-card-animation-asset-image"/>
               <video className=" absolute w-[374px] bottom-[52px] left-[80px] h-[211px] top-[109px]" data-uia="nmhp-card-animation-asset-video" autoPlay muted loop ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/></video>
                 
             </div>
           </div> 
          </div>
            <div className=" divider w-[1381px] h-[8px] bg-[rgb(35,35,35)]"></div>
        </div>
    )
}

export default LandingPageComp1