import style from './Error.module.scss';

const Error = ({data,dispatch}) => {

  return (
    <>
    <h1 className={style.warning}>Sorry something went wrong!</h1>
    {data?.length > 0 && 
          <button className={style.btn_callAll} 
                  onClick={()=>dispatch({type:'ALL_COUNTRIES_RESET',payload:data})}>
              Get All Countries
          </button>}
    </>
  )
}

export default Error