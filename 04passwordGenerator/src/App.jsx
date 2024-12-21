import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(10)
  const [allowdNumber, setAllowdNumber] = useState(false)
  const [allowdCharacter, setAllowdCharacter] = useState(false)
  const [password, setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdejghijklmnopqrstuvwxyz"

    if(allowdNumber) str += "1234567890";
    if(allowdCharacter) str += "!@#$%^&*()-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, allowdNumber, allowdCharacter, setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length, allowdNumber, allowdCharacter, passwordGenerator])

  const copyTextToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)

  }, [password])


  return (
    <>

      <div className='px-4 py-3 md:text-base text-sm bg-slate-800 shadow-xl text-center rounded-lg max-w-lg m-auto mt-16 text-orange-500'>
      <h1 className='text-white mt-3 text-lg'>Password Generator</h1>
        <div className='flex mt-4 mb-5'>
          <input 
          type="text" 
          value={password}
          readOnly
          ref={passwordRef}
          placeholder='Password'
          className="px-3 py-1 border shadow-sm border-slate-500 outline-none w-full rounded-s-lg" />
          <button 
          onClick={copyTextToClipboard}
          id='btn'
          className='py-1 px-4 bg-blue-600 text-white rounded-e-lg'>Copy</button>
        </div>
        <div className='flex items-center gap-x-2 '>
          <input 
          type='range' 
          min="6" 
          max="100"
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
          className="cursor-pointer"/><p>Length ({length})</p>
          <input 
          type='checkbox' 
          defaultChecked={allowdNumber}
          onChange={() => {
            setAllowdNumber((prevNumber) => !prevNumber)
          }}
          className="cursor-pointer" />
          <p>Numbers</p>
          <input 
          type='checkbox' 
          defaultChecked={allowdCharacter}
          onChange={() => {
            setAllowdCharacter((prevChar) => !prevChar)
          }}
          className="cursor-pointer" />
          <p>Characters</p>
        </div>
      </div>

    </>
  )
}

export default App
