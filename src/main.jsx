import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '@/layouts/Header/Header'
import './i18n' 

const currentUrl = window.location.pathname

// Шукаємо саме наш новий контейнер
const container = document.getElementById('header-root')

if (container) {
  // React замінить лише те, що всередині #header-root
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <Header url={currentUrl} />
    </React.StrictMode>
  )
}