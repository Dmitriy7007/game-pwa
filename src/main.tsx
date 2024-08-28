import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '@/pages/home/Home.tsx'
import './global.scss'
import PWABadge from '@/components/ui/pwa-badge/PWABadge.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <PWABadge />
  </React.StrictMode>
)
