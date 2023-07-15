import{ useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./routes/LandingPage"
import Stack from "./routes/Stack"
import "./index.css"


const App = () => {
  return (
    <div className={`app ${theme}`>
      <BrowserRouter>
        <Navbar theme={theme} handleTheme={handleTheme} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </BrowserRouter>
      <Footer theme={theme} />
    </div>
  )
}
export default App
