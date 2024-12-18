import { useState } from 'react'


function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 5

  const addValue = function(){
    if(counter === 20){
      setCounter(counter + 0)
    }else{
      setCounter(counter + 1)
    }

  }
  const removeValue = () => {
    if(counter === 0) {
      setCounter(counter - 0)
    }else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Chai aur react with vite</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Increase value: {counter}</button> <br/><br/>
    <button onClick={removeValue}>Decrease value: {counter} </button>
    </>
  
  )
}

export default App
