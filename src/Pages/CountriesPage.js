import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"
//component
import Countries from "../Component/Countries/Countries"
import Spinner from "../Component/Countries/Spinner/Spinner"
import Error from "../Component/Countries/Error/Error"

const CountriesPage = () => {
  
  const {data} = useLoaderData()

  return (
      <Suspense fallback={<Spinner />}>
        <Await resolve={data} errorElement={<Error />}>
          <Countries />
        </Await>
      </Suspense>
  )
}

export default CountriesPage