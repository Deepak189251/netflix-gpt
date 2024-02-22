import { useEffect } from "react"
import { options } from "../utils/Constants"
import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../utils/MovieSlice"


const useNowMovieClips = (id) => {

    const dispatch = useDispatch()
    
    const getNowMovieClips = async () => {

        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        const json = await data.json()
        //console.log(json)
        const clips = json.results.filter(c => c.type === "Trailer")
        const trailer = clips.length ? clips[0] : json.results[0]
        
        
        dispatch(addMovieTrailer(trailer))
        //console.log(trailer)




    }

    useEffect(() => {
        getNowMovieClips()
    }, [])

    
}



export default useNowMovieClips

   
