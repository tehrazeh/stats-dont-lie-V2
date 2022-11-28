import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
 const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Header