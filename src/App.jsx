import './App.css'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Blog from './Component/Blog/Blog'
import Us from './Component/Us/Us'
import ErorrPage from './Component/ErorrPage/ErorrPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/us" element={<Us />} />
        <Route path="*" element={<ErorrPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
