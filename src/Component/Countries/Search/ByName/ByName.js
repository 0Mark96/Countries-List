import style from './ByName.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect,useState } from 'react'

const ByName = ({dispatch}) => {
  const {search_country_cont,search_icon,search_input} = style
  
  //get country from live search
  const [input,setInput]=useState()
  
  useEffect(()=>{
      if(input === undefined){
        return
      }
      const debounceTime = setTimeout(()=>{
        dispatch({type:'FILTER_BY_NAME',inputValue:input.toLowerCase()})
      },400)
      return ()=>{
        clearTimeout(debounceTime)
      }
  },[input,dispatch])


    return (
    <div className={search_country_cont}>

        <FontAwesomeIcon icon={faMagnifyingGlass} className={search_icon}/>
        
        <input type='text'     
               className={search_input}
               placeholder='Search for a country...'
               onChange={e => setInput(e.target.value)}
               />
    </div>
  )
}

export default ByName