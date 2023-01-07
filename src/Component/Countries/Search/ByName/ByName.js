import style from './ByName.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const ByName = ({dispatch}) => {
    
  const {search_country_cont,search_icon,search_input} = style
  
  
  let debounceTime ;   // debounce on user input

  const filterByName = (value) => { 
      clearTimeout(debounceTime)
     
      debounceTime = setTimeout(()=>{
        dispatch({type:'FILTER_BY_NAME',inputValue:value})
      },400)
  }

    return (
    <div className={search_country_cont}>

        <FontAwesomeIcon icon={faMagnifyingGlass} className={search_icon}/>
        
        <input type='text'     
               className={search_input}
               placeholder='Search for a country...'
               onChange={e => filterByName(e.target.value)}
               />
    </div>
  )
}

export default ByName