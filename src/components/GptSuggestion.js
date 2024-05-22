import GptSearch from "./GptSearchBar"
import GptMovies from "./GptMovies"
const GptSuggestion = () => {

    return (
        <div>
        <div className=" absolute top-[150px] left-0 right-0 m-auto w-[100%]">
            <div>
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