import { configureStore } from "@reduxjs/toolkit";
import player from './Slices/PlayerSlice'

const store = configureStore({
    reducer: {
        player
    }    
})

export default store