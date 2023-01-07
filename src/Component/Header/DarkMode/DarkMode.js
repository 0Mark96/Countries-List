import style from './DarkMode.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import   {faMoon as faMoonFull}   from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import colors from '../../../features/_variable.scss'

const DarkMode = () => {
  const {darkMode_btn} = style
  const [isDarkMode,setIsDarkMode] = useState(false)
  
  useEffect(()=>{
    const rootStyle = document.documentElement?.style;
    // dark mode color
    rootStyle.setProperty("--background", isDarkMode ? colors.darkBlue : null)
    rootStyle.setProperty("--bg-element", isDarkMode ? colors.blue: null)
    rootStyle.setProperty("--text", isDarkMode ? colors.white : null)
    rootStyle.setProperty("--text-input", isDarkMode ? colors.white : null)
    rootStyle.setProperty("--shadow", isDarkMode ? 'black' : null)
  },[isDarkMode])
 

  return (
    <button className={darkMode_btn} onClick={()=>(setIsDarkMode(!isDarkMode))}>
      <FontAwesomeIcon icon={isDarkMode ? faMoonFull : faMoon}/>{isDarkMode ? 'Light ' : 'Dark ' } Mode
    </button>
  )
}

export default DarkMode