import Button from "../components/Atoms/Button/Button"

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
              <Button content="LinkedIn"/><Button content="GitHub"/><Button content="Figma"/>
              <Button content="Codepen"/><Button content="Twitter" icon={<icon/>}/>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default Contact
  