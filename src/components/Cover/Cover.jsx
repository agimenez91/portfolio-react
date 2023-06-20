import "./Cover.scss"
import TypographicEffect from "../Atoms/TypographicEffect/TypographicEffect"
import { Link } from "react-router-dom"

function Cover() {

    return (
      <>
        <div className="cover">
          <TypographicEffect></TypographicEffect>
          <p className="big">A frontend developer who aims to create compositions that are aesthetically pleasing and easy to understand for all audiences.
          <br/>I hope you enjoy exploring my work!</p>
          <p className="small">P.S. If you would like to know more about me personally, don't forget to visit my <a href="/project/about">about</a>!</p>
        </div>
      </>
    )
  }
  
export default Cover
  