import style from './ByName.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'



const ByName = ({dispatch,isDarkMode}) => {
    
  const {search_country_cont,search_icon,search_input,dark_mode} = style
  
  const filterByName = (value) => {
      dispatch({type:'FILTER_BY_NAME',inputValue:value})
  }

    return (
    <div className={classnames(search_country_cont,{[dark_mode]:isDarkMode})}>

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