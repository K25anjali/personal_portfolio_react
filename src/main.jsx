import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter,Route,Routes } from "react-router-dom"
// import Home from "./components/Home"
// import About from "./components/About"
// import Works from "./components/Works"
// import Contact from "./components/ContactForm"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> 
   <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
    </Routes>
 </BrowserRouter> */}
    <App />
  </React.StrictMode>,
)
