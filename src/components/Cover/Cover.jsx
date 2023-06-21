import "./Cover.scss"
import TypographicEffect from "../Atoms/TypographicEffect/TypographicEffect"
import { Link } from "react-router-dom"

function Cover() {

    return (
      <>
        <div className="cover">
          <TypographicEffect></TypographicEffect>
          <p className="big">Frontend developer who aims to create compositions that are aesthetically pleasing and easy to understand for all audiences.</p>
        </div>
      </>
    )
  }
  
export default Cover
  