import { useState, useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumber, setisNumber] = useState(false)
  const [isChar, setisChar] = useState(false)
  const [isPassword, setisPassword] = useState()
  /**useRef hook */

  const passwordRef = useRef(null)

  /**Password generator function */

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ASDFGHJKLLZXCVBNMQWERTYUIOPasdfghjklzxcvbnmqwertyuiop"
    if (isNumber) str += "0123456789"
    if (isChar) str += "!@#$%^&*()_+={}[]<>?"

    for (let i=1; i<= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setisPassword(pass);
  }, [length, isNumber, isChar, setisPassword])

  let copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(isPassword);
  },[isPassword])

  /** The useEffect hook is triggered after the initial render 
   * and whenever any of the specified dependencies 
   * (length, isNumber, isChar, setisPassword) change. */
  useEffect(()=>{
    passwordGenerator();
  },[length, isNumber, isChar, setisPassword])


  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-800'>
        <div className='text-xl text-center text-white'> Password Generator</div>
        <div className='flex overflow-hidden shadow-md'>
          <input
            type="text"
            value={isPassword}
            className='outline-none w-full py-1 px-3 rounded-lg'
            placeholder='password'
            ref={passwordRef}
            readOnly
          />
          <button 
            onClick={copyPasswordToClipBoard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 ml-2 shrink-0 rounded-lg'
            >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input className='cursure-pointer'
              type="range"
              min={8}
              max={15}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> length:{length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input className='cursure-pointer'
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              onChange={() => { setisNumber((prev) => !prev) }}
            />
            <label htmlFor="numberInput"> Number</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input className='cursure-pointer'
              type="checkbox"
              defaultChecked={isChar}
              id="isCharallowed"
              onChange={() => { setisChar((prev) => !prev) }}
            />
            <label htmlFor="isCharallowed"> Character Allowed</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
