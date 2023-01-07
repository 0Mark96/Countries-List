import { useLoaderData} from "react-router-dom"
import Country from "../Component/Country/Country"


const CountryPage = () => {

  const {data} = useLoaderData()

  return (
        <Country data={data}/>
  )
}

export default CountryPage