import styles from './Footer.module.scss'
 const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
      Danila Tolstoukhov, 2022
      </div>
      <div>
        App uses <a href='https://www.balldontlie.io/'>BallDontLie</a> API
      </div>
    </div>
  )
}

export default Footer