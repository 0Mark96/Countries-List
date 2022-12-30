import { useOutletContext } from 'react-router'
//component
import ByName from './ByName/ByName'
import ByRegion from './ByRegion/ByRegion'

const Search = ({dispatch}) => {

  const isDarkMode = useOutletContext()

  return (
    <>
        <ByName dispatch={dispatch} isDarkMode={isDarkMode}/>
        <ByRegion dispatch={dispatch} isDarkMode={isDarkMode}/>
    </>
  )
}

export default Search