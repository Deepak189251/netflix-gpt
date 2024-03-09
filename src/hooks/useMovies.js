import { nowMovieUrl, options, popularMovieUrl, topRatedMovieUrl, upcomingMovieUrl } from "../utils/Constants"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { addNowMovie, addPopularMovie, addTopRatedMovie, addUpcomingMovie } from "../utils/MovieSlice"

export  const useNowMovies = () => {

    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {

        const data = await fetch(nowMovieUrl, options)
        const json = await data.json()
        dispatch(addNowMovie(json.results))
        //console.log(json.results)

    }

    useEffect(() => {

        getNowPlayingMovies()

    },[])
    
    
}



export const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {

        const data = await fetch(topRatedMovieUrl, options)
        const json = await data.json()
        dispatch(addTopRatedMovie(json.results))
       // console.log(json)
        
       
    }

    useEffect(() => {

        getTopRatedMovies()

    },[])
    
}

export const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {

        const data = await fetch(upcomingMovieUrl, options)
        const json = await data.json()
        //console.log(json)
        dispatch(addUpcomingMovie(json.results))
       
        
       
    }

    useEffect(() => {

        getTopRatedMovies()

    },[])
    
}

export const usePopularMovies = () => {

    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {

        const data = await fetch(popularMovieUrl, options)
        const json = await data.json()
        //console.log(json)
        dispatch(addPopularMovie(json.results))
       
        
       
    }

    useEffect(() => {

        getTopRatedMovies()

    },[])
    
}
/*
export const useSearchMovies = async (movie, date) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&primary_release_year=' + date + 'page=1&' , options)
    const json = await data.json()
    //console.log(json)

    return json.results

}*/