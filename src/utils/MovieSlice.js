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
        movieCast: null,
        movieClip: null,
        wishList: [],
        movieData: null,
        
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
        },

        addMovieClip: (state, action) => {
            state.movieClip = action.payload
        },

        removeMovieClip: (state, action) => {
            state.movieClip = null
        },

        addMovieInWishList: (state, action) => {
            state.wishList = action?.payload
        },

        removeMovieFromWishList: (state, action) => {
            state.wishList = state?.wishList?.filter((a) => {
                return a?.imdbID !== action?.payload
            })
        },

        addMovieData: (state, action) => {
            state.movieData = action.payload
        }



        

    }
})

export const {addNowMovie, addMovieTrailer,addTopRatedMovie, addPopularMovie, addUpcomingMovie, addMovieInfo, removeMovieInfo, addMovieCast, removeMovieCast, addMovieClip, removeMovieClip, addMovieInWishList, removeMovieFromWishList, addMovieData} = MovieSlice.actions

export default MovieSlice.reducer