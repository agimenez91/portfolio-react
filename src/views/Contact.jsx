import Button from "../components/Atoms/Button/Button"
import WavyLine from '/src/components/Atoms/WavyLine/WavyLine'

function Contact() {

    return (
      <>
        <div className="contact">
          <div>
          <h1 className="display">Get in <span className="relative">touch<WavyLine></WavyLine></span> !</h1>
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
              <Button href="https://www.linkedin.com/in/andreagimenezuso/" target="_blank" content="LinkedIn" icon="leave-to"/>
              <Button href="https://github.com/agimenez91" target="_blank" content="GitHub" icon="leave-to"/>
              <Button href="#" target="_blank" content="Figma" icon="leave-to"/>
              <Button href="https://codepen.io/agimenez91" target="_blank" content="Codepen" icon="leave-to"/>
              <Button href="https://twitter.com/whatthatfront" target="_blank" content="Twitter" icon="leave-to"/>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default Contact
  