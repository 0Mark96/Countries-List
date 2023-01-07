import { Link } from "react-router-dom"
import style from './ErrorPage.module.scss'

const ErrorPage = ({object = 'Page'}) => {
  const {wrapper,home_page_btn} = style

  return (
    <div className={wrapper}>
        {object === 'Page' && <h1>404</h1>}
        <h2>{object} not found!</h2>
        <Link to='/countries' className={home_page_btn}>
          Home Page
        </Link>
    </div>
  )
}

export default ErrorPage