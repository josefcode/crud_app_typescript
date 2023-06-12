import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { OpenStateProvider } from './component/hooks/open.tsx'

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <Router>
    <OpenStateProvider>
        <App />
    </OpenStateProvider>
  </Router>
)
