import style from './Details.module.scss'
import BorderCountries from './BorderCountries/BorderCountries'

const Details = ({details}) => {
    const {details_wrapper,name,general_info,list} = style

    return (
    <div className={details_wrapper}>
        <h1 className={name}>{details?.name}</h1>
        <div className={general_info}>
            <ul className={list}>
                <li>Native Name: <span>{details?.nativeName}</span></li>
                <li>Population: <span>{details?.population}</span></li>
                <li>Region: <span>{details?.region}</span></li>
                <li>Sub Region: <span>{details?.subregion}</span></li>
                <li>Capital: <span>{details?.capital}</span></li>
            </ul>
            <ul className={list}>
                <li>Top Level Domain: <span>{details?.topLevelDomain[0]}</span></li>
                <li>Currencies: <span>{details?.currencies[0]?.name}</span></li>
                <li>Languages: <span>{details?.languages.map((lang)=> lang.name + ', ')}</span></li>
            </ul>
        </div>
        {details.borders?.length > 0 && 
        <BorderCountries data={details}/>
        }
    </div>
  )
}

export default Details