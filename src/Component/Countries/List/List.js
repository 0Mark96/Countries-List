import style from './List.module.scss'
import Card from './Card/Card'


const List = ({countries}) => {
  const {list_wrapper} = style
  

  return (
    <div className={list_wrapper}>
      {
        countries?.map(country => (
          <Card key={country?.name?.common} country={country}/>
        ))
      }
    </div>
  )
}

export default List