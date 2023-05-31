import { Navigate, Routes, useLocation } from "react-router-dom"
import { Route } from "react-router-dom"
import "./globalStyles/GlobalStyle.scss"
import Home from "./views/Home"
import Project from "./views/Project"
import Contact from "./views/Contact"
import Cookies from "./views/Cookies"
import Legal from "./views/Legal"
import Privacy from "./views/Privacy"
import Error404 from "./views/Error404"
import Topbar from "./components/Topbar/Topbar"



function App() {

  return (
    <>
      <Topbar />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/project' element={ <Project /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/cookies' element={ <Cookies /> } />
        <Route path='/legal' element={ <Legal /> } />
        <Route path='/privacy' element={ <Privacy /> } />
        <Route path='/404' element={ <Error404 /> } />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </>
  )
}

export default App
