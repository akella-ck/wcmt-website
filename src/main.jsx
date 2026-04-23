import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './index.css'

// quick runtime trace to confirm bundle runs
// eslint-disable-next-line no-console
console.log('App bootstrap')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)