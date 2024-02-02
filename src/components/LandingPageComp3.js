const LandingPageComp3 = () => {

    return (
        <div>
            <div className=" text-white container-comp3 bg-black w-[100%] h-[538px] pt-[50px] pb-[50px]">
                <div className=" w-[1061px] h-[438px] ml-[160px] mr-[160px] flex">
                    <div className="w-[525px] h-[168px] pb-[24px] mt-[115px]">
                        <h1 className="text-[43px] font-extrabold">Watch everywhere</h1>
                        <p className="text-[21px] font-medium mt-[16px]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="w-[525px] relative">
                      <img className=" absolute z-[1]" alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                      <video className="absolute w-[335px] h-[189px] top-[46px] left-[99px]" data-uia="nmhp-card-animation-asset-video" autoPlay muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/></video>
                    </div>
                </div>
            </div>
            <div className=" divider w-[1381px] h-[8px] bg-[rgb(35,35,35)]"></div>
        </div>
    )
}

export default LandingPageComp3