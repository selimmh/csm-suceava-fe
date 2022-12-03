import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import AppCore from './core/AppCore'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <AppCore />
    </React.StrictMode>
)
