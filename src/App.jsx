import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Pages
import AboutPage from './Pages/AboutPage'
import BlogsPage from './Pages/BlogsPage'
import HomePage from './Pages/HomePage'
import ServicesPage from './Pages/ServicesPage'
import RajProfile from './Pages/ProfilePages/RajProfile'
import DevProfile from './Pages/ProfilePages/DevProfile'
import UrvashiProfile from './Pages/ProfilePages/UrvashiProfile'
import VishakhaProfile from './Pages/ProfilePages/VishakhaProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path = "/" element={<HomePage />}/>
          <Route path = "about" element={<AboutPage />}/>
          <Route path = "blogs" element={<BlogsPage />}/>
          <Route path = "services" element={<ServicesPage />}/>
          <Route path = "/raj" element={<RajProfile />}/>
          <Route path = "DevProfile" element={<DevProfile />}/>
          <Route path = "UrvashiProfile" element={<UrvashiProfile />}/>
          <Route path = "VishakhaProfile" element={<VishakhaProfile />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
