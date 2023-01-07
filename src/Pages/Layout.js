import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import { Outlet } from "react-router-dom"
import Header from "../Component/Header/Header"

const Layout = () => {

  //scroll to top when route change
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return (
    <div className='App'>
        <Header/>
        <Outlet/>       
    </div>
  )
}

export default Layout