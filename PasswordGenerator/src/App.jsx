import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [ length ,setlength ] = useState(8)
  const [ numberAllowed , setnumberAllowed] = useState(false)
  const [ charAllowed , setcharAllowed ] = useState(false)
  const [ password , setPassword ] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed){
      str += "0123456789"
    }
    if (charAllowed){
      str += "!@#$%^&*()-_+=[]{}~`'"
    }

    for(let i=1; i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }  
    setPassword(pass)

  } , [length, numberAllowed , charAllowed , setPassword ] )

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,48)
    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full h-screen flex bg-black">
        <div className='w-full h-56 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <h1 className='text-white text-4xl text-center font-sans px-1.5 py-2 my-4'>Password Generator</h1>
          <div className='flex shadow overflow-hidden rounded-lg mb-4'>
            <input 
            className='outline-none py-1 px-3 w-full bg-white' 
            placeholder='Password' 
            type='text' 
            value={password} 
            readOnly
            ref={passwordRef}/>
            <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
            >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range" 
              min={6} max={48} 
              value={length} 
              className='cursor-pointer' 
              onChange={(e) =>{setlength(e.target.value)}}/>
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox" 
                defaultValue={numberAllowed} 
                id='numberInput' 
                onChange={() => {setnumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setcharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
