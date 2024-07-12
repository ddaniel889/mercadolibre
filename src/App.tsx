
import './App.css'
import Home from './components/home'
import Category from './components/category'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/category" element={<Category />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
