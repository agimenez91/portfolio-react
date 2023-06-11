import { Navigate, Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import "./globalStyles/GlobalStyle.scss";
import Home from "./views/Home";
import Project from "./views/Project";
import Contact from "./views/Contact";
import Cookies from "./views/Cookies";
import Legal from "./views/Legal";
import Privacy from "./views/Privacy";
import Error404 from "./views/Error404";
import Topbar from "./components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import Ball from "./components/Atoms/Ball/Ball";
import Ball404 from "./components/Atoms/Ball/Ball404";

import { useMediaQuery } from 'react-responsive'
export const projectContext = React.createContext({
  projects: []
});

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [list, setlist] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setlist(data));
  }, []);

  const is404Route = location.pathname === "/404";

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 50rem)' });

  return (
    <>
      <Topbar/>
      <main className="main">
      <projectContext.Provider value={{
        projects: list
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectID" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </projectContext.Provider>

      {!is404Route && <Ball />}
      {is404Route && <Ball404 />}

      <ScrollToTop />
      </main>
    </>
  );
}

export default App;
