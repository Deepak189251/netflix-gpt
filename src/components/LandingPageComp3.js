const LandingPageComp3 = () => {

    return (
        <div>
            <div className=" text-white container-comp3 bg-black w-[100%] xl:h-[538px] lg:h-[490px] h-[400px] pt-[50px] pb-[50px]">
                <div className=" w-[auto] xl:h-[438px] lg:h-[390px] h-[300px] flex justify-center">
                    <div className="sl:w-[525px] lg:w-[460px] w-[340px] lg:h-[168px] h-[154px] pb-[24px] xl:mt-[115px] lg:mt-[80px] mt-[45px]">
                        <h1 className="xl:text-[43px] lg:text-[40px] text-[35px] font-extrabold">Watch everywhere</h1>
                        <p className="lg:text-[21px] text-[19px] font-medium mt-[16px]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="xl:w-[525px] xl:h-[438px] lg:w-[460px] lg:h-[390px] w-[340px] h-[300px] relative">
                      <img className=" absolute z-[1] lg:bottom-[53px] bottom-[27px] lg:h-[332px] h-[255px] lg:right-[8px] right-0 top-[18px]" alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                      <video className="absolute xl:w-[292px] lg:w-[291px] w-[225px] xl:h-[214px] lg:h-[235px] h-[160px] xl:top-[22px] lg:top-0 top-[24px] xl:left-[145px] lg:left-[83px] left-[56px]"  data-uia="nmhp-card-animation-asset-video" autoPlay muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/></video>
                    </div>
                </div>
            </div>
            <div className=" divider w-[1381px] h-[8px] bg-[rgb(35,35,35)]"></div>
        </div>
    )
}

export default LandingPageComp3