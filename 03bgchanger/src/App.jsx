import { useState } from 'react'


function App() {

  const [color, setColor] = useState("teal")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-slate-200 px-4 py-2 gap-3 shadow-lg rounded-3xl '>
          <button className='bg-orange-600 text-white outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("orange")}
          >
            Orange</button>
          <button className='bg-red-500 text-white outline-none px-4 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("red")}>
            Red</button>
          <button className='bg-blue-600 text-white outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("blue")}>
            Blue</button>
          <button className='bg-green-600 text-white outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("green")}>
            Green</button>
          <button className='bg-purple-600 text-white outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("purple")}>
            Purple</button>
          <button className='bg-black text-white outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("black")}>
            Black</button>
          <button className='bg-white text-black outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("white")}>
            White</button>
          <button className='bg-yellow-500 text-black outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("yellow")}>
            Yellow</button>
          <button className='bg-pink-600 text-white outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("pink")}>
            Pink</button>
          <button className='bg-cyan-700 text-white outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("cyan")}>
            Cyan</button>
          <button className='bg-lime-700 text-white outline-none px-3 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("lime")}>
            Lime</button>
          <button className='bg-sky-600 text-white outline-none px-4 py-1 rounded-full text-sm text-center shadow-xl' onClick={()=> setColor("sky")}>
            Sky</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
