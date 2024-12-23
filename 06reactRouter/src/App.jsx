import { useState } from 'react'
import { useParams } from 'react-router-dom'

function App(   ) {
  const {userid} = useParams()
  return (
    <>
   <div className='container mx-auto w-full max-w-7xl'>
   <h1 className='bg-gray-600 text-white text-3xl p-4 mt-6 text-center'>User: {userid} </h1>
   </div>
    </>
  )
}

export default App
