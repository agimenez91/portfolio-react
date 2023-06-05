import { Link } from "react-router-dom"
import Button from "../components/Atoms/Button/Button"
import Icon from "../components/Atoms/Icons/Icon"

function Contact() {

    return (
      <>
        <div className="contact">
          <div>
          <h1 className="display">Get in <span className="wavyline">touch</span> !</h1>
          <p className="big">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, nisi. Atque nesciunt sit unde natus nam ratione dolor. Consectetur praesentium earum atque explicabo iste temporibus illum recusandae rerum, itaque fugiat.</p>
          </div>
          <div className="flex--row extragap wrap">
            <div className="flex--column">
              <h2 className="h6">Send an Email:</h2>
              <p><a href="mailto:andrea.gimenez91@gmail.com" target="_blank" rel="noreferrer">andrea.gimenez91@gmail.com</a></p>
            </div>
            <div className="flex--column">
              <h2 className="h6">Call/text me:</h2>
              <p><a href="tel:+34606647405">+34 606 64 74 05</a></p>
            </div>
          </div>
          <div className="flex--column">
            <h2 className="h6">Or take a look:</h2>
            <div className="flex--row">
              <a href="https://www.linkedin.com/in/andreagimenezuso/" target="_blank"><Button content="LinkedIn" icon={<Icon/>}/></a>
              <a href="https://github.com/agimenez91" target="_blank"><Button content="GitHub" icon={<Icon/>}/></a>
              <a href="#" target="_blank"><Button content="Figma" icon={<Icon/>}/></a>
              <a href="https://codepen.io/agimenez91" target="_blank"><Button content="Codepen" icon={<Icon/>}/></a>
              <a href="https://twitter.com/whatthatfront" target="_blank"><Button content="Twitter" icon={<Icon/>}/></a>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default Contact
  