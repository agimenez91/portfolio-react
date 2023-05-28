import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import "./globalStyles/GlobalStyle.scss"
import Home from "./views/home"
import Contact from "./views/contact"
import Project from "./views/Project"
import Cookies from "./views/Cookies"
import Legal from "./views/Legal"
import Privacy from "./views/Privacy"
import Error404 from "./views/Error404"
import Topbar from "./components/TopBar/Topbar"


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
      </Routes>
    </>
  )
}

export default App
