import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const globalVariable = "This is veriable Example"
// const customElement = React.createElement(
//   'a',
//   {href:'https://google.com', target:'_blank'},
//   "Click me to visit google"
//   globalVariable // it gets inject here
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>

)
