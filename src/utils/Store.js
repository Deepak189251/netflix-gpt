import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieReducer from "./MovieSlice"
import gptReducer from "./GptSearchSlice"
import configReducer from "./ConfigSlice"
const store = configureStore({

    reducer : {
       user: userReducer,
       movie: movieReducer,
       gptSearch: gptReducer,
       config: configReducer
    }
    

});

export default store