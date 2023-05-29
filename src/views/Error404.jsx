import { Link } from "react-router-dom"
import Ball404 from "../components/Atoms/Ball/Ball404"

function Error404() {

    return (
      <>
        <div className="content-centered">
          <p className="display">Ups!</p>
          <big>(404 - Page not found)</big>
          <Link to="/" className="h6">Back to home</Link>
          <Ball404 />
        </div>
      </>
    )
  }
  
export default Error404
  