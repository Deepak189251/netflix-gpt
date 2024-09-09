//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
const VideoTitle = ({title, overview, id}) => {
    let string 
    if(overview?.length > 300){
        string = overview.slice(0, 300)
    }
    else{
        string = overview
    }
    console.log(overview?.length)
    return(
       <div className="w-[100%] sm:h-screen h-[300px] aspect-video  bg-gradient-to-r from-black absolute">
        <div className=" md:ml-[70px] sm:ml-[50px] ml-[25px] md:w-[500px] sm:w-[430px] w-[280px] xl:mt-[200px] sm:mt-[150px] mt-[90px] mb-[30px] ">
            <h1 className=" w-[100%] xl:text-4xl sm:text-2xl text-xl font-bold text-white">{title}</h1>
            <p className=" w-[100%] xl:text-lg text-base md:inline-block hidden  font-semibold mt-[20px] text-white">{string}</p>
            <div className=" md:mt-[20px] sm:mt-[15px] mt-[10px] flex">
                {/*<div className=" flex justify-center bg-white rounded xl:w-[120px] w-[100px] xl:h-[44px] h-[36px] mr-[20px] hover:bg-opacity-80">
                    <FontAwesomeIcon className=" xl:w-[36px] w-[30px] xl:my-[10px] my-[8px] mr-[5px] xl:h-[26px] h-[20px]" icon={faPlay} color="black" />
                    <p className="  xl:text-xl text-lg font-semibold xl:mt-[8px] mt-[5px] xl:mb-[10px] mb-[5px] text-black">Play</p>
                </div>*/}
                {/*<button className="mr-[20px] bg-white pl-[20px] pr-[60px] pt-[9px] pb-[5px] h-[43px] rounded relative hover:bg-opacity-80">
                    <FontAwesomeIcon className=" w-[36px] h-[26px] pr-[4px]" icon={faPlay} color="black" />
                    <span className="  text-xl font-semibold text-black absolute top-[7px]">Play</span>
                </button>*/}
                {/*<button className=" bg-[rgba(109,109,110,0.7)] pt-[7px] pl-[16px] pr-[115px] pb-[10px] rounded relative hover:bg-opacity-10">
                    <svg viewBox="0 0 24 24" className="w-[27px] text-white h-[27px]" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
                    <span className="  text-xl font-semibold text-white absolute ml-[18px] top-[6px] left-[36px]">More Info</span>
                </button>*/}
                <Link to={`/movie/${id}`}>
                    <div className="bg-[rgba(109,109,110,0.7)] flex justify-center rounded xl:w-[150px] md:w-[135px] w-[110px] xl:h-[44px] md:h-[36px] h-[28px] hover:bg-opacity-10">
                        <svg viewBox="0 0 24 24" className="xl:w-[27px] md:w-[23px] w-[20px] xl:h-[27px] md:h-[23px] h-[20px] xl:my-[10px] md:my-[7px] my-[5px] md:mr-[10px] mr-[6px] text-white " fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
                        <p className=" xl:text-xl md:text-lg text-sm font-semibold xl:mt-[8px] xl:mb-[10px] md:mt-[5px] mt-[4px] mb-[5px] text-white">More Info</p>
                    </div>
                </Link>
            </div>
        </div>
      </div>
    )
}

export default VideoTitle