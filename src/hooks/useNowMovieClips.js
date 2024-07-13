import { useEffect } from "react"
import { options } from "../utils/Constants"
import { useDispatch, useSelector } from "react-redux"
import { addMovieTrailer, addMovieClip, removeMovieClip } from "../utils/MovieSlice"


export const useNowMovieClips = (id) => {

    const movieClip = useSelector(store => store.movie.movieTrailer)

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
        if(!movieClip) getNowMovieClips()
    }, [])

    
}


export const useMovieClips = (id) => {

    const movieClip = useSelector(store => store.movie.movieClip)

    const dispatch = useDispatch()
    
    const getNowMovieClips = async () => {

        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        const json = await data.json()
        //console.log(json)
        const clips = json.results.filter(c => c.type === "Trailer")
        const trailer = clips.length ? clips[0] : json.results[0]
        
        
        dispatch(addMovieClip(trailer))
        //console.log(trailer)




    }

    useEffect(() => {
        if(!movieClip) {
            getNowMovieClips()
        }
        else{
            if(movieClip.key !== id){
                dispatch(removeMovieClip())
                getNowMovieClips()
            }
        }
    }, [])

    
}






   
