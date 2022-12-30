import style from './DarkMode.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import   {faMoon as faMoonFull}   from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'


const DarkMode = () => {
  const {darkMode_btn} = style
  const [isDarkMode,setIsDarkMode] = useState(false)

  useEffect(()=>{
    const rootStyle = document.documentElement?.style;
    // dark mode color
    rootStyle.setProperty("--background", isDarkMode ? 'hsl(207, 26%, 17%)' : null)
    rootStyle.setProperty("--bg-element", isDarkMode ? 'hsl(209, 23%, 22%)' : null)
    rootStyle.setProperty("--text", isDarkMode ? 'hsl(0, 0%, 100%)' : null)
    rootStyle.setProperty("--input-text", isDarkMode ? 'hsl(0, 0%, 100%)' : null)

  },[isDarkMode])
 

  return (
    <button className={darkMode_btn} onClick={()=>(setIsDarkMode(!isDarkMode))}>
      <FontAwesomeIcon icon={isDarkMode ? faMoonFull : faMoon}/> Dark Mode
    </button>
  )
}

export default DarkMode