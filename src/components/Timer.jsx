import React, { useState } from 'react'

const Timer = () => {

  const [counter, setCounter] = useState();
console.log("rendering the counter value",counter);

  const increaseByOne=() => {
    console.log("increasing value before", counter)
    setCounter(counter + 1);
  }
  const decreaseByOne=() => {
    console.log("increasing value before", counter)
    setCounter(counter - 1);
    
  }
  const setToZero=() => {
    console.log("reseting value before", counter)
    setCounter(0);
    
  }
  return (
    <div>
      <Display counter={counter} />
      <Button onClick ={increaseByOne} text="plus"/>
      <Button onClick ={setToZero} text="Zero"/>
      <Button onClick ={decreaseByOne} text="minus"/>
    </div>
    
  )
}

export default Timer



export const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}


export const Display = ({counter}) => {
  return (
    <div>
      {counter}
  </div>
  )
}