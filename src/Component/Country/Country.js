
import style from './Country.module.scss'
import Back from './Back/Back'
import Flag from './Flag/Flag'
import Details from './Details/Details'

const Country = ({data}) => {
  const {main_wrapper,details_wrapper} = style
  
  return (
    <main className={main_wrapper}>
      <Back />
      {data && 
        <div className={details_wrapper}>  
          <Flag flag={data.flag}/>
          <Details details={data}/> 
        </div>
      }
    </main>
  )
}

export default Country





//   const [borderCountries,setBorderCountries] = useState([])

// useEffect(()=>{
//   const getBorderCountries = async() => {
//     const requestArray = await Promise.all(data.borders?.map((code) => {
//        return axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
//        .then(({data}) => {
//         return {code:data[0].cca3, name:data[0].name?.common}
//       })
//       .catch(err => console.log(err.message))
//     }))
//     setBorderCountries(requestArray)
//   }
//   if(data.borders){
//     getBorderCountries()
//   }
// },[data])


      //  { borderCountries?.length > 0 &&
      //   borderCountries?.map(country => {
      //     return  <li key={country?.code}>
      //               <Link to={`/countries/${country?.code}`}>{country?.name}</Link>
      //             </li>
      //   })
      // } 


