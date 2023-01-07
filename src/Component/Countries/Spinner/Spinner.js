import style from './Spinner.module.scss';

const Spinner = () => {
  const {spinner,head} = style
  return (
    <div className ={spinner}>
      <div className={head}></div>
    </div>
  )
}

export default Spinner