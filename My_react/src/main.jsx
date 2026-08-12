import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './Index.jsx'
import App from './App.jsx'
//import UseState from './UseState.jsx'
//import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UseState from './UseState.jsx'
import UseEffect from './UseEffect.jsx'
import UseEffect1 from './UseEffect1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UseEffect1 />
    </BrowserRouter>
  </StrictMode>
)