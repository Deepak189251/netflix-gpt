import { nowMovieUrl, options, popularMovieUrl, topRatedMovieUrl, upcomingMovieUrl } from "../utils/Constants"
import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { addNowMovie, addPopularMovie, addTopRatedMovie, addUpcomingMovie } from "../utils/MovieSlice"

export  const useNowMovies = () => {

    const movies = useSelector(store => store.movie.nowMovie)

    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {

        const data = await fetch(nowMovieUrl, options)
        const json = await data.json()
        dispatch(addNowMovie(json.results))
        //console.log(json.results)

    }

    useEffect(() => {

       if(!movies) getNowPlayingMovies()

    },[])
    
    
}



export const useTopRatedMovies = () => {

    const movies = useSelector(store => store.movie.topRatedMovie)

    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {

        const data = await fetch(topRatedMovieUrl, options)
        const json = await data.json()
        dispatch(addTopRatedMovie(json.results))
       // console.log(json)
        
       
    }

    useEffect(() => {
       
      if(!movies) getTopRatedMovies()

    },[])
    
}

export const useUpcomingMovies = () => {

    const movies = useSelector(store => store.movie.upComingMovie)
    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {

        const data = await fetch(upcomingMovieUrl, options)
        const json = await data.json()
        //console.log(json)
        dispatch(addUpcomingMovie(json.results))
       
        
       
    }

    useEffect(() => {

      if(!movies)  getTopRatedMovies()

    },[])
    
}

export const usePopularMovies = () => {

    const movies = useSelector(store => store.movie.popularMovie)
    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {

        const data = await fetch(popularMovieUrl, options)
        const json = await data.json()
        //console.log(json)
        dispatch(addPopularMovie(json.results))
       
        
       
    }

    useEffect(() => {

       if(!movies) getTopRatedMovies()

    },[])
    
}
/*
export const useSearchMovies = async (movie, date) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&primary_release_year=' + date + 'page=1&' , options)
    const json = await data.json()
    //console.log(json)

    return json.results

}*/