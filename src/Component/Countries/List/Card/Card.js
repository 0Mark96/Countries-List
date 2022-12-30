import style from './Card.module.scss'
import { useNavigate } from 'react-router-dom'



const Card = ({country}) => {
    const {card_cont,flag,info,name,info_p} = style

    const navigate = useNavigate()
    
    const goToDetails = ()=>{
      navigate(`/countries/${country.cca3}`)
    }

    return (
    <div className={card_cont} onClick={goToDetails}>
        <div className={flag}>
            <img src={country.flags?.png} alt={country.flag}/>
        </div>
        <div className={info}>
            <h1 className={name}>{country.name?.common}</h1>
            <p className={info_p}>Population: <span>{country.population.toLocaleString()}</span></p>
            <p className={info_p}>Region: <span>{country.region}</span></p>
            <p className={info_p}>Capital: <span>{country.capital}</span></p>
        </div>
    </div>
  )
}

export default Card