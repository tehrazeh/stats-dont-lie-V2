import { useSelector } from "react-redux"
import Form from "./PlayerComponents/Form/Form"


const Player = () => {
    const {playerName, playerSeason} = useSelector(state => state.player)
    console.log('player rerender bro')
  return (
    <>
    <Form/>
    {playerName && <div>Player: {playerName}</div>}
    {playerSeason && <div>Season: {playerSeason}</div>}
    </>
  )
}

export default Player