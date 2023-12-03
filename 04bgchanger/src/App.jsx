import { useState } from 'react'
import Button from './shared/button/Button'
import './App.css'

function App() {
  const [colorsamp, setColor] = useState("olive");

  let colorArr = ['Red', 'Blue', 'Green', 'Black', 'White'];

  // let color = colorArr.map((item,index)=>{
  //   return <button key={index} onClick={() => addBGColor(item)}>{item}</button>
  // });
//   function addBGColor(item) {
//     console.log("Click colors..." , item)
//     setColor(item)
// }
  let parentClick =  function addBGColor(item) {
    setColor(item)
}
  let color = colorArr.map((item, index) => {
    return <Button key={index} item={item} onClick={parentClick}/>
  });

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: colorsamp }}>
       <h1>This is background color change project</h1>
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl'>{color}</div>
        </div>
      </div>
    </>
  )
}

export default App
