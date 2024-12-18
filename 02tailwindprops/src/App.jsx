import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {

  return (
    <>
      <h1 className='bg-lime-500 text-black p-1 rounded-t-md'>Tailwind css</h1>

      <Card username="Chaiaurcode" clickme="Learn more." />
      <Card username="Kawsar"  />
    </>
  )
}

export default App

