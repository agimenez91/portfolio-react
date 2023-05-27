import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Contact from "./views/contact"
import Cookies from "./views/Cookies"
import Error404 from "./views/Error404"
import Legal from "./views/Legal"
import Privacy from "./views/Privacy"
import Project from "./views/Project"
import "./globalStyles/GlobalStyle.scss"
import Topbar from "./components/TopBar/Topbar"
import Home from "./views/home"

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
