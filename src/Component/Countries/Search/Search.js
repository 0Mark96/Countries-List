import style from './Search.module.scss';
//component
import ByName from './ByName/ByName'
import ByRegion from './ByRegion/ByRegion'

const Search = ({dispatch,allCountries}) => {
  const {search_wrapper} = style

  return (
    <section className={search_wrapper}>
        <ByName dispatch={dispatch}/>
        <ByRegion dispatch={dispatch} allCountries={allCountries}/>
    </section>
  )
}

export default Search