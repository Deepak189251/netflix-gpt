import { nowMovieUrl, options, popularMovieUrl, topRatedMovieUrl, upcomingMovieUrl } from "../utils/Constants"
import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { addMovieCast, addMovieInfo, addNowMovie, addPopularMovie, addTopRatedMovie, addUpcomingMovie, removeMovieCast, removeMovieInfo } from "../utils/MovieSlice"
import { useErrorBoundary } from "react-error-boundary"


export  const useNowMovies = () => {

    const movies = useSelector(store => store.movie.nowMovie)
    const {showBoundary} = useErrorBoundary()
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        try{
            const data = await fetch(nowMovieUrl, options)
            const json = await data.json()
            dispatch(addNowMovie(json.results))
            //console.log(json.results)
        }
        catch(err) {
            showBoundary(err)
        }
       

    }

    useEffect(() => {

       if(!movies) getNowPlayingMovies()

    },[])
    
    
}



export const useTopRatedMovies = () => {

    const movies = useSelector(store => store.movie.topRatedMovie)
    const {showBoundary} = useErrorBoundary()

    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {
        try{
            const data = await fetch(topRatedMovieUrl, options)
            const json = await data.json()
            dispatch(addTopRatedMovie(json.results))
           // console.log(json)
        }
        catch(err){
            showBoundary(err)
        }
        
        
       
    }

    useEffect(() => {
       
      if(!movies) getTopRatedMovies()

    },[])
    
}

export const useUpcomingMovies = () => {

    const movies = useSelector(store => store.movie.upComingMovie)
    const dispatch = useDispatch()
    const {showBoundary} = useErrorBoundary()


    const getTopRatedMovies = async () => {
        try{
            const data = await fetch(upcomingMovieUrl, options)
            const json = await data.json()
            //console.log(json)
            dispatch(addUpcomingMovie(json.results))
        }
        catch(err){
            showBoundary(err)
        }
       
    }

    useEffect(() => {

      if(!movies)  getTopRatedMovies()

    },[])
    
}

export const usePopularMovies = () => {
    const {showBoundary} = useErrorBoundary()

    const movies = useSelector(store => store.movie.popularMovie)
    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {
        try{
            const data = await fetch(popularMovieUrl, options)
            const json = await data.json()
            //console.log(json)
            dispatch(addPopularMovie(json.results))
        }
        catch(err){
            showBoundary(err)
        }
       
    }

    useEffect(() => {

       if(!movies) getTopRatedMovies()

    },[])
    
}
   

   export const useMovieInfo =  (id) => {
        const dispatch = useDispatch()
        const {showBoundary} = useErrorBoundary()

        const getMovieInfo = async () => {
            try{
                const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=en-US'
                const data = await fetch(url, options) 
                const json = await data.json()
                dispatch(addMovieInfo(json))
            }
            catch(err){
                showBoundary(err)
            }
            
        }

        const getMovieCast = async () => {
            try{
                const url = 'https://api.themoviedb.org/3/movie/'+ id +'/credits?language=en-US'
                const data = await fetch (url, options)
                const json = await data.json()
                dispatch(addMovieCast(json))
            }
            catch(err){
                showBoundary(err)
            }
            
        }

        const movieInfo = useSelector(store => store.movie.movieInfo)

        useEffect(() => {
            if(!movieInfo){
                getMovieInfo()
                getMovieCast()
            }
            else{
                if(movieInfo.id !== id) {
                    dispatch(removeMovieInfo())
                    dispatch(removeMovieCast())
                    getMovieInfo()
                    getMovieCast()
                }
            }
    

        }, [])
       
      
    }

     
   

/*
export const useSearchMovies = async (movie, date) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&primary_release_year=' + date + 'page=1&' , options)
    const json = await data.json()
    //console.log(json)

    return json.results

}*/