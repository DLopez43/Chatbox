import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRoom from './MainRoom.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRoom />
  </StrictMode>,
)
