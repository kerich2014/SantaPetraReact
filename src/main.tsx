import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/pages/Home/Home'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)