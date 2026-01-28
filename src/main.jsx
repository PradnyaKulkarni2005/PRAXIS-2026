import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { AudioProvider } from './context/AudioContext'
import '@google/model-viewer';
import { Analytics } from '@vercel/analytics/react'; // 1. Import the component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AudioProvider>
        <App />
        <Analytics /> {/* 2. Add the component here */}
      </AudioProvider>
    </BrowserRouter>
  </StrictMode>
)
