import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './infrastructure/ui/shared/assets/css/app.css'
import { AppRouter } from './infrastructure/ui/shared/routes/AppRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
