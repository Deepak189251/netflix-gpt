import GptSearch from "./GptSearchBar"
import GptMovies from "./GptMovies"
const GptSuggestion = () => {

    return (
        <div className=" bg-gray-200 w-[100%] h-[100%] absolute mt-[70px] ">
            <div className=" mt-[20px] mx-[20px]">
                <div className=" mb-[20px]">
                    <GptSearch />
                </div>
                <div>
                    <GptMovies />
                </div>
            
           
            </div>
        </div>
    )
}

export default GptSuggestion