import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import MainRoom from './MainRoom.tsx'
import App from './components/darkmode/App.tsx'
// import { ChatWindow } from './components/ChatWindow.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
    {/* < MainRoom/> */}
    <App/>
    </>
  </StrictMode>,
)
