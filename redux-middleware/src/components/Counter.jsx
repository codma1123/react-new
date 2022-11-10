

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
    </>
  )
}

export default Counter