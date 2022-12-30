import { Link } from "react-router-dom"

const ErrorPage = () => {
    const divStyle = {
        margin:'0 auto',
        marginTop:60,
        width:'fit-content',
        textAlign:'center',
        fontSize:35,
    }
  return (
    <div style={divStyle}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to='/countries'>Home</Link>
    </div>
  )
}

export default ErrorPage