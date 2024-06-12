import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({

    name:"movie",
    initialState: {
        nowMovie: null,
        movieTrailer: null,
        topRatedMovie: null,
        upComingMovie: null,
        popularMovie: null,
        movieInfo: null,
        movieCast: null
        
    },

    reducers: {
        addNowMovie : (state, action) => {
            state.nowMovie = action.payload; 
        },

        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        },

        addTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload
        },

        addPopularMovie: (state, action) => {
            state.popularMovie = action.payload
        },

        addUpcomingMovie: (state, action) => {
            state.upComingMovie = action.payload
        },

        addMovieInfo: (state, action) => {
            state.movieInfo = action.payload
        },

        removeMovieInfo: (state, action) => {
            state.movieInfo = null
        },

        addMovieCast: (state, action) => {
            state.movieCast = action.payload
        },

        removeMovieCast: (state, action) => {
            state.movieCast = null
        }


        

    }
})

export const {addNowMovie, addMovieTrailer,addTopRatedMovie, addPopularMovie, addUpcomingMovie, addMovieInfo, removeMovieInfo, addMovieCast, removeMovieCast} = MovieSlice.actions

export default MovieSlice.reducer