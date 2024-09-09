import { useNowMovieClips } from "../hooks/useNowMovieClips"
import { useSelector } from "react-redux"
const VideoBackground = ({id}) => {
    useNowMovieClips(id)
    const Trailer = useSelector((store) => store.movie.movieTrailer)
    if (!Trailer) return
    
    
    console.log(Trailer.key)
    
    return (
        <div className= " w-[100%] h-[100%] ">
            <iframe className="w-[100%] sm:h-[100%] h-[300px]  aspect-video disabled:" src={`https://www.youtube.com/embed/${Trailer?.key}?&autoplay=1&loop=1&mute=1&playlist=${Trailer?.key}&controls=0&rel=0`} title="YouTube video player"  ></iframe>
        </div>
    )
}

export default VideoBackground