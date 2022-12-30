import style from './BorderCountries.module.scss'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const BorderCountries = ({data}) => {
    const {borderCountries_wrapper,list,title} = style
   
    const [borderCountries,setBorderCountries] = useState([]) //list (name,code)
    
    // get border countries name with a new api call
    useEffect(()=>{
        const getBorderCountries = async() => {
            const requestArray = await Promise.all(data.borders?.map((code) => {
                return axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
                .then(({data}) => {
                   return {code:data[0].cca3, name:data[0].name?.common}
                })
                .catch(err => console.log(err.message))
            }))
            setBorderCountries(requestArray)
        }
        if(data.borders){
            getBorderCountries()
        }
    },[data])

    return (
        <div className={borderCountries_wrapper}>
            <span className={title}>Border Countries:</span>
            <ul className={list}>
                { 
                borderCountries?.length > 0 &&
                    borderCountries?.map(country => {
                    return  <li key={country?.code}>
                              <Link to={`/countries/${country?.code}`}>{country?.name}</Link>
                            </li>
                    }) 
                }                
            </ul>
 
        </div>
   
    )
}

export default BorderCountries

