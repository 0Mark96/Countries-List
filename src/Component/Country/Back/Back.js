import style from './Back.module.scss'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Back = () => {
    const {btn_cont,icon} = style
  return (
    <Link to='/' className={btn_cont}>
      <FontAwesomeIcon icon={faArrowLeftLong} className={icon}/>Back
    </Link>
  )
}

export default Back