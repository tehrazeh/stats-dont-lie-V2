import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playerName: '',
    playerSeason: null,
}


const PlayerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setName(state, action) {
            state.playerName = action.payload
            console.log(state.playerName)
        },
        setSeason(state, action) {
            state.playerSeason = action.payload
            console.log(state.playerSeason)
        },
    }
})

export const {setName, setSeason} = PlayerSlice.actions

export default PlayerSlice.reducer