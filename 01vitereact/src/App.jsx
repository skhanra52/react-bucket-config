import { useState } from 'react'
import './App.css'
import Landing from './Landing-Screen'

function App() {
  const [count, setCount] = useState(0)
  let userName = "skhanra"

  return (
    <>
      <h1>This is vite project setup {userName}</h1>
      <h1>This is vite project for the user {userName}</h1>
      <Landing/>
    </>
  )
}

export default App
