//component
import ByName from './ByName/ByName'
import ByRegion from './ByRegion/ByRegion'

const Search = ({dispatch,allCountries}) => {


  return (
    <>
        <ByName dispatch={dispatch}/>
        <ByRegion dispatch={dispatch} allCountries={allCountries}/>
    </>
  )
}

export default Search