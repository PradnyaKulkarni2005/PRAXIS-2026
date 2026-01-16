import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { AudioProvider } from './context/AudioContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AudioProvider>
        <App />
      </AudioProvider>
    </BrowserRouter>
  </StrictMode>
)
