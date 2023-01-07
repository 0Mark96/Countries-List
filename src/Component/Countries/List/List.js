import style from './List.module.scss'
import Card from './Card/Card'


const List = ({countries}) => {
  const {list_wrapper} = style
  

  return (
    <div className={list_wrapper}>
      { 
      countries?.length > 0 ?
        countries?.map(country => (
          <Card key={country?.name?.common} country={country}/>
          ))
        : 
          <h2>No country found!</h2> 
      }
    </div>
  )
}

export default List