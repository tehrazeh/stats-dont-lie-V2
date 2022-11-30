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
        },
        setSeason(state, action) {
            state.playerSeason = action.payload
        },
    }
})

export const {setName, setSeason} = PlayerSlice.actions

export default PlayerSlice.reducer