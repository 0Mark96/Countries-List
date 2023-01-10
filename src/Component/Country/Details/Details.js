import style from './Details.module.scss'
import BorderCountries from './BorderCountries/BorderCountries'

const Details = ({details}) => {
    const {details_wrapper,name,general_info,list} = style

    return (
    <div className={details_wrapper}>
        <h1 className={name}>{details.name}</h1>
        <div className={general_info}>
            <ul className={list}>
                <li><b>Native Name: </b> {details.nativeName}</li>
                <li><b>Population: </b> {details.population?.toLocaleString().replaceAll('.',',')}</li>
                <li><b>Region: </b> {details.region}</li>
                <li><b>Sub Region: </b> {details.subregion}</li>
                <li><b>Capital: </b> {details.capital}</li>
            </ul>
            <ul className={list}>
                <li><b>Top Level Domain: </b> {details.topLevelDomain[0]}</li>
                <li><b>Currencies: </b> 
                                    {details.currencies?.map(curr => 
                                            details.currencies?.indexOf(curr) !== details.currencies?.length -1 
                                            ? curr.name  + ', ' 
                                            : curr.name )
                                    }
                                
                </li>
                <li><b>Languages: </b> 
                               {details.languages?.map(lang => 
                                            details.languages?.indexOf(lang) !== details.languages?.length -1 
                                            ? lang.name  + ', ' 
                                            : lang.name)}
                                
                </li>
            </ul>
        </div>
        {details.borders?.length > 0 && 
        <BorderCountries data={details}/>
        }
    </div>
  )
}

export default Details