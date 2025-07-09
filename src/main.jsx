import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx' // Assuming you have a Home component in Home.jsx
// You can move this to a separate file (Home.jsx) and export it, or export it here if you want to keep it in this file:


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

)
