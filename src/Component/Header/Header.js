import style from './Header.module.scss'
import { Link } from 'react-router-dom'
import DarkMode from "./DarkMode/DarkMode"


const Header = () => {
    const {header,logo,div} = style

    return (
    <header className={header}>
        <Link to='/' className={logo}>Where in the World?</Link>
        <div className={div}></div>
        <DarkMode />
    </header>
  )
}

export default Header