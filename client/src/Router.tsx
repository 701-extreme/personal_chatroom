import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
