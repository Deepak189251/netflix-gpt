import { createSlice } from "@reduxjs/toolkit";


const GptSearchSlice = createSlice({

    name: "gptSearch",
    initialState: {
        gptValue: false,
        gptMovieResults: null,
        gptMovieNames: null
    },

    reducers: {
        toggleGpt: (state) => {
            state.gptValue = !state.gptValue
        },

        addGptMovies: (state, action) => {
            const {name, result} = action.payload
            state.gptMovieResults = result
            state.gptMovieNames = name
        }
    }
})

export const {toggleGpt, addGptMovies} = GptSearchSlice.actions

export default GptSearchSlice.reducer