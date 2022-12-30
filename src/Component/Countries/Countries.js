import style from './Countries.module.scss'	
import { useReducer } from 'react'
import {useAsyncValue } from "react-router-dom"
//component
import Search from "./Search/Search"
import List from './List/List'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'


const reducer = (state,action) => {
 
  switch (action.type){
    case 'FILTER_REGION_SUCCESS':
      return {
        loading:false,
        countries:action.payload,
        filteredCountries:action.payload
      }
    case 'FILTER_REGION_ERROR':
      return {
        loading:false,
        countries:[],
        filteredCountries:[],
        error:'Something went wrong!'
      }
    case 'FILTER_BY_NAME':
      return{
        ...state,
        filteredCountries:state.countries?.filter(country => {
            return country.name?.common.toLowerCase().includes(action.inputValue.toLowerCase())
             }),
      }
    case 'SET_LOADING':
      return{
        ...state,
        loading:true,
      }
    default:
       return state
  }

}

const Countries = () => {
  const {main_wrapper,search_wrapper,list_wrapper} = style

  const {data} = useAsyncValue()

  let initialState = {
    loading:false,
    countries:data,
    filteredCountries:data,
  }

  const [{filteredCountries,loading,error},dispatch] = useReducer(reducer, initialState)



  return (
    <main className={main_wrapper}>
        <section className={search_wrapper}>
            <Search dispatch={dispatch}/>
        </section>
        	
        <section className={list_wrapper}>
           { loading && <Spinner /> }
           { (!loading && !error) && <List countries={filteredCountries}/>}
           {error && <Error />}
        </section>
    </main>
  )
}

export default Countries