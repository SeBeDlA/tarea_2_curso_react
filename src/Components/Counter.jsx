import s from '../Style/Counter.module.css'
const Counter = ({setCounter, counter}) => {
  
  const decrement= () => {
    if(counter > 0) setCounter(counter-1);
  }
  const increment= () => {
    if(counter < 5) setCounter(counter+1);
  }

  return (
    <div className={s.row}>
      <button onClick={decrement}>-</button>
      <div className={s.counter}>{counter}</div>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter;