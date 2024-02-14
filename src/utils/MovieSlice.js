import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({

    name:"movie",
    initialState: {
        nowMovie: null,
        movieTrailer: null,
        topRatedMovie: null,
        upComingMovie: null,
        popularMovie: null
        
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
        }


        

    }
})

export const {addNowMovie, addMovieTrailer,addTopRatedMovie, addPopularMovie, addUpcomingMovie} = MovieSlice.actions

export default MovieSlice.reducer