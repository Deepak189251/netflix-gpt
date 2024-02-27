import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
const VideoTitle = ({title, overview}) => {
    console.log(title)
    return(
       <div className="w-[100%] aspect-video  bg-gradient-to-r from-black absolute">
        <div className=" ml-[70px] w-[500px] mt-[300px] mb-[30px] ">
            <h1 className=" w-[100%] text-4xl font-bold mb-[20px] text-white">{title}</h1>
            <p className=" w-[100%] text-lg font-semibold text-white">{overview}</p>
            <div className=" mt-[20px]">
                <button className="mr-[20px] bg-white pl-[20px] pr-[60px] pt-[9px] pb-[5px] h-[43px] rounded relative hover:bg-opacity-80">
                    <FontAwesomeIcon className=" w-[36px] h-[26px] pr-[4px]" icon={faPlay} color="black" />
                    <span className="  text-xl font-semibold text-black absolute top-[7px]">Play</span>
                </button>
                <button className=" bg-[rgba(109,109,110,0.7)] pt-[7px] pl-[16px] pr-[115px] pb-[10px] rounded relative hover:bg-opacity-10">
                    <svg viewBox="0 0 24 24" className="w-[27px] text-white h-[27px]" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
                    <span className="  text-xl font-semibold text-white absolute ml-[18px] top-[6px] left-[36px]">More Info</span>
                </button>
            </div>
        </div>
      </div>
    )
}

export default VideoTitle