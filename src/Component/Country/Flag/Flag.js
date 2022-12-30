import style from './Flag.module.scss'


const Flag = ({flag}) => {
    const {flag_wrapper}=style
  return (
    <div className={flag_wrapper}>
        <img src={flag} alt='flag'/>
    </div>
  )
}

export default Flag