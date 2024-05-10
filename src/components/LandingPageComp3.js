const LandingPageComp3 = () => {

    return (
        <div>
            <div className=" text-white container-comp3 bg-black w-[100%] xl:h-[538px] lg:h-[490px] md:h-[400px] sm:h-[560px] h-[520px] pt-[50px] pb-[50px]">
                <div className=" w-[auto] xl:h-[438px] lg:h-[390px] md:h-[300px] sm:h-[460px] [420px] flex justify-center md:flex-row flex-col items-center">
                    <div className="sl:w-[525px] lg:w-[460px] md:w-[340px] sm:w-[400px] w-[310px] lg:h-[168px] sm:h-[154px] h-[170px] sm:pb-[24px] pb-[20px] md:text-left text-center">
                        <h1 className="xl:text-[43px] lg:text-[40px] sm:text-[36px] text-[30px] font-extrabold">Watch everywhere</h1>
                        <p className="lg:text-[21px] text-[19px] font-medium mt-[16px]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="xl:w-[525px] xl:h-[350px] lg:w-[460px] lg:h-[340px] md:w-[340px] md:h-[275px] sm:w-[400px] sm:h-[284px] w-[310px] h-[250px]  relative">
                      <img className=" absolute z-[1] lg:bottom-[53px] bottom-[27px] lg:h-[332px] md:h-[255px] sm:h-[280px] h-[225px] lg:right-[8px] right-0 sm:top-[18px] top-[27px] xl:w-[460px] lg:w-[441px] sm:w-[400px] w-[307px]" alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                      <video className="absolute xl:w-[292px] lg:w-[293px] md:w-[225px] sm:w-[255px] w-[200px] xl:h-[214px] lg:h-[260px] md:h-[160px] sm:h-[172px] h-[167px] xl:top-[22px] lg:top-0 sm:top-[24px] top-[20px] xl:left-[145px] lg:left-[82px] md:left-[56px] sm:left-[71px] left-[53px]"  data-uia="nmhp-card-animation-asset-video" autoPlay muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/></video>
                    </div>
                </div>
            </div>
            <div className=" divider w-[100%] h-[8px] bg-[rgb(35,35,35)]"></div>
        </div>
    )
}

export default LandingPageComp3