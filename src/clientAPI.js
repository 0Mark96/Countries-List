import axios from "axios";
import { defer } from "react-router";


export const getAllCountries = () => {
    const data =  axios.get(`https://restcountries.com/v3.1/all`)
    return defer({data})
}

export const getRegionCountries = async (query) => {
    const {data} = await axios.get(`https://restcountries.com/v3.1/region/${query}`)
    return data
}

export const getCountry = async ({params:{name}}) => {
    const data = axios.get(`https://restcountries.com/v2/alpha/${name}`)
    return data
}