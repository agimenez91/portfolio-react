import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Topbar.scss";

function Topbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isActive && !event.target.closest('.burger')) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isActive]);

  return (
    <>
      <div className={`topbar ${isActive ? 'active' : ''}`}>
        <p className="h6">Andrea Giménez</p>
        <ul className={`nav burger__nav ${isActive ? 'active' : ''}`}>
          <li className="nav__item"><Link to="/" className="nav__item--link">Home</Link></li>
          <li className="nav__item"><Link to="/Project" className="nav__item--link">Projects</Link></li>
          <li className="nav__item"><Link to="/Contact" relative="/contact">Contact</Link></li>
          <li className="nav__item"><Link to="/legal" className="nav__item--link">Legal Statement</Link></li>
          <li className="nav__item"><Link to="/privacy" className="nav__item--link">Privacy Policy</Link></li>
          <li className="nav__item"><Link to="/cookies" className="nav__item--link">Cookie Policy</Link></li>
        </ul>
        <div className="nav__wrap">
          <ul className="nav nav--desktop">
            <li className="nav__item"><Link to="/" className="nav__item--link">Home</Link></li>
            <li className="nav__item"><Link to="/Project" className="nav__item--link">Projects</Link></li>
            <li className="nav__item"><Link to="/Contact" relative="/contact">Contact</Link></li>
          </ul>
          <div className={`burger ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <svg width="35" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <title>Burger menu icon</title>
              <desc>Two horizontal lines, one above the other, the lower line is shorter than the other.</desc>
              <path stroke="#222" strokeWidth="2" d="M0 7h35M10 15h25"/>
            </svg>
          </div>
        </div>
        <small className="small accent-font copywright">Andrea Giménez 2023 <span className="main-font">©</span> All Rights Reserved.</small>
      </div>
    </>
  );
}

export default Topbar;
