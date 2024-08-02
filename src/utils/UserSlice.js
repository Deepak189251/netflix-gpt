import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({

    name: "user",
    initialState : {
        email: null,
        uid: null,
        wish: null,
    },

    reducers: {
        addUser : (state, action) => {
            state.email = action?.payload?.email
            state.uid = action?.payload?.uid
        },

        removeUser : (state, action) => {
            state.email = null
            state.uid = null
        },

        checkWish: (state, action) => {
            const wishList = JSON.parse(localStorage.getItem(state.uid))
            console.log(wishList)
            console.log(action.payload)
            const list = wishList.filter((a) => a.id === action.payload)
            console.log(list)
            if(list.length === 0) {
                state.wish = "white"
            }else{
                state.wish = "red"
            }
        }
    }
});

export const { addUser, removeUser, checkWish} = userSlice.actions;

export default userSlice.reducer