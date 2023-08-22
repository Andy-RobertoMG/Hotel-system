import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router} from 'react-router-dom'
import App from './App.jsx'
import { BrowserRouter,Routes } from 'react-router-dom'
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient();

import './index.css'
// import './css/normalize.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
