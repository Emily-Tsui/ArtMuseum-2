import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from '../routes/DetailView.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index={true} path="/" element={<App />} />
          <Route index={false} path="/artDetails/:title" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
