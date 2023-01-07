import style from './Card.module.scss'
import { useNavigate } from 'react-router-dom'



const Card = ({country}) => {
    const {card_cont,flag,info_wrapper,name,info} = style

    const navigate = useNavigate()
    
    const goToDetails = ()=>{
      navigate(`/countries/${country.cca3}`)
    }

    return (
    <div className={card_cont} onClick={goToDetails}>
        <div className={flag}>
            <img src={country.flags?.png} alt={country.flag}/>
        </div>
        <div className={info_wrapper}>
            <h1 className={name}>{country.name?.common}</h1>
            <p className={info}><b>Population: </b>{country.population.toLocaleString().replaceAll('.',',')}</p>
            <p className={info}><b>Region: </b>{country.region}</p>
            <p className={info}><b>Capital: </b>{country.capital}</p>
        </div>
    </div>
  )
}

export default Card