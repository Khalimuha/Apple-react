import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './commonResources/css/bootstrap.css';
import './commonResources/css/styles.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
