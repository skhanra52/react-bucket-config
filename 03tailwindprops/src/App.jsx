import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Sharedcomponents/card'

function App() {
  const [count, setCount] = useState(0)
  let loginCred = {
    userName: "Suman",
    password:"khanra"
  }

  return (
    <>
      <h2 className='bg-green-400 p-4 rounded-xl mb-4'>This is Telwind Project</h2>
      <Card channel="react Tutorial" credential = {loginCred}/>
    </>
  )
}

export default App
