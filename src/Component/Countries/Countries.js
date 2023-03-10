import style from './Countries.module.scss'	
import { useReducer } from 'react'
import {useAsyncValue } from "react-router-dom"
//component
import Search from "./Search/Search"
import List from './List/List'
import Spinner from './Spinner/Spinner'
import Error from './Error/Error'

let initialState = {
  error:false,
  loading:false,
  countries:[],
  countriesDisplayed:[],
}

const reducer = (state,action) => {

  switch (action.type){
    case 'FETCH_REGION_SUCCESS':
      return {
        countries:action.payload, //dinamic list of countries
        countriesDisplayed:action.payload,
        loading:false,
        error:false,
      }
    case 'FETCH_REGION_ERROR':
      return {
        countries:[],
        countriesDisplayed:[],
        loading:false,
        error:true,
      }
    case 'FILTER_BY_NAME':
      return{
        ...state,
        countriesDisplayed: state.countries?.filter(country => {
            return country.name?.common.toLowerCase().includes(action.inputValue)
             }),
      }
    case 'SET_LOADING':
      return{
        ...state,
        error:false,
        loading:true,
      }
    case 'ALL_COUNTRIES_RESET':
      return{
        loading:false,
        error:false,
        countries:action.payload,
        countriesDisplayed:action.payload,
      }
    default:
       return state
  }

}

const Countries = () => {
  const {main_wrapper} = style

  const {data} = useAsyncValue() // all countries data 

  const [{countriesDisplayed,loading,error},dispatch] = useReducer(reducer, {...initialState,countries:data,countriesDisplayed:data})


  return (
    <main className={main_wrapper}>
          
          <Search dispatch={dispatch} allCountries={data}/>
        
        { loading && 
            <Spinner /> 
        }
        { (!loading && !error) && 
            <List countries={countriesDisplayed}/>
        }
        {error && 
            <Error data={data} dispatch={dispatch}/>
        }

    </main>
  )
}

export default Countries