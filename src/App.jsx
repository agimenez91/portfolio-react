import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./views/home"
import Contact from "./views/contact"
import Cookies from "./views/Cookies"
import Error404 from "./views/Error404"
import Legal from "./views/Legal"
import Privacy from "./views/Privacy"
import Project from "./views/Project"


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/Cookies' element={ <Cookies /> } />
        <Route path='/404' element={ <Error404 /> } />
        <Route path='/Legal' element={ <Legal /> } />
        <Route path='/Privacy' element={ <Privacy /> } />
        <Route path='/Project' element={ <Project /> } />
      </Routes>
    </>
  )
}

export default App
