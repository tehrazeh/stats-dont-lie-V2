import { useState } from 'react'
import styles from './Main.module.scss'
import { Link } from 'react-router-dom'
 const Main = () => {

  const [buttons] = useState(() => {
    return [
      {buttonName: 'player', description: `Look up player's average for a specific season`}, // balldontlie for avgs
      {buttonName: 'teams', description: `List of current NBA teams`}, // sportradar api for rosters
      // buttonName: 'leaders', description: 'Look up leaders of a certain stat for a specific season' 
      // buttonName: 'standings', description: 'Teams standings for a specific season'
    ]
  })

  return (
    <div className={styles.Main}>
      <div>
        <p>Welcome to the <span>stats dont lie</span></p>  
      </div>
      <div>
        <h4>Categories</h4>
        {buttons.map((button) => {
            return <Link key={button.buttonName} to={`/${button.buttonName}`}><button>{button.buttonName}</button></Link>
        })}
      </div>
    </div>
  )
}

export default Main