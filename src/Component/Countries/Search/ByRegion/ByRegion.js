import style from './ByRegion.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import classnames from 'classnames'
import { getRegionCountries } from '../../../../clientAPI'
import { useEffect } from 'react'


const ByRegion = ({dispatch,allCountries}) => {
    const {wrapper,dropdown_btn,dropdown_cont,drop_open} = style
    
   const [dropOpen,setDropOpen] = useState(false)
   const [value,setValue] = useState()

  // get region countries
    useEffect(()=>{
      if(value === undefined){
          return
      }
        dispatch({type:'SET_LOADING'})
          const time = setTimeout(()=>{
            if(value !== 'all'){
              getRegionCountries(value)
              .then(data => {
                  dispatch({type:'FETCH_REGION_SUCCESS',payload:data})
              })
              .catch(err => dispatch({type:'FETCH_REGION_ERROR'}))
            }else{
              dispatch({type:'ALL_COUNTRIES_RESET',payload:allCountries})
            }
          },700)
      return ()=> clearTimeout(time)
    },[allCountries,dispatch,value])

    // close dropdown when click outside
    useEffect(() => {
      const closeModal = (e) => {
        if (!e.target.closest('.drop-btn')) {
          setDropOpen(false)
        }
      }
      document.addEventListener('click', closeModal)
      return () => {      
        document.removeEventListener('click', closeModal)
      }
    }, [])


    //get regions and remove dublicate array
    const regionsArr = [...new Set(allCountries?.map(country => country.region))] 

    return (
    <div className={wrapper}>
        <button className={dropdown_btn +  ' drop-btn'} onClick={()=>setDropOpen(!dropOpen)}>
          Filter by Region <FontAwesomeIcon icon={faAngleDown}/>
        </button>
        <ul className={classnames(dropdown_cont,{[drop_open]:dropOpen})}>
            <li>
              <button onClick={()=>setValue('all')}>
                All
              </button>
            </li>
            {
              regionsArr.map(region => (
              <li key={region}>
                <button onClick={()=>setValue(region.toLowerCase())}>
                  {region}
                </button>
              </li>
              ))
            }
        </ul>
    </div>
  )
}

export default ByRegion