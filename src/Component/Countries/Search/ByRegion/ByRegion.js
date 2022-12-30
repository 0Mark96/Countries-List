import style from './ByRegion.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import classnames from 'classnames'
import { getRegionCountries } from '../../../../clientAPI'
import { useEffect } from 'react'


const ByRegion = ({dispatch}) => {
    const {wrapper,dropdown_btn,dropdown_cont,drop_open} = style
    
   const [dropOpen,setDropOpen] = useState(false)

    const filterByRegion = (query)=>{
      dispatch({type:'SET_LOADING'})
      getRegionCountries(query)
      .then(data => {
        dispatch({type:'FILTER_REGION_SUCCESS',payload:data})
      })
      .catch(err => dispatch({type:'FILTER_REGION_ERROR'}))
    }

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
    
    
    const regions = ['Africa','America','Asia','Europe','Oceania','Antarctic']

  return (
    <div className={wrapper}>
        <button className={dropdown_btn +  ' drop-btn'} onClick={()=>setDropOpen(!dropOpen)}>
          Filter by Region <FontAwesomeIcon icon={faAngleDown}/>
        </button>
        <ul className={classnames(dropdown_cont,{[drop_open]:dropOpen})}>
            {
              regions.map(region => (
              <li key={region}>
                <button onClick={()=>filterByRegion(region.toLowerCase())}>
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