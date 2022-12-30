import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"
//component
import Countries from "../Component/Countries/Countries"
import Spinner from "../Component/Spinner/Spinner"
import Error from "../Component/Error/Error"

const Home = () => {
  
  const {data} = useLoaderData()

  return (
      <Suspense fallback={<Spinner />}>
        <Await resolve={data} errorElement={<Error />}>
          <Countries />
        </Await>
      </Suspense>
  )
}

export default Home