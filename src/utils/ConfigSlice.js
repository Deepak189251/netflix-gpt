import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({

    name: "config",
    initialState: {
        preferedLanguage: "english"
    },

    reducers: {
        toggleLanguage: (state, action) => {
            state.preferedLanguage = action.payload
        }
    }
})

export const {toggleLanguage} = configSlice.actions

export default configSlice.reducer