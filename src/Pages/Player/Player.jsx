import { useDispatch, useSelector } from "react-redux"
import { setName, setSeason } from "../../Redux/Slices/PlayerSlice"

const Player = () => {
    const {name, season} = useSelector(state => state.player)
    const dispatch = useDispatch()
  return (
    <>
    <div>
        <label>Enter the player's name</label>
        <input  onChange={e => dispatch(setName(e.target.value))} type = 'text' placeholder="e.g. Lebron James"></input>
    </div>
    <div>
        <label>Specify the season</label>
        <input  onChange={e => dispatch(setSeason(e.target.value))} type = 'text' placeholder="e.g. 2021"></input>
    </div>
    </>
  )
}

export default Player