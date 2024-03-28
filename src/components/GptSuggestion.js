import GptSearch from "./GptSearchBar"
import GptMovies from "./GptMovies"
const GptSuggestion = () => {

    return (
        <div className=" absolute top-[150px] left-[170px]">
            <GptSearch />
            <GptMovies />
        </div>
    )
}

export default GptSuggestion