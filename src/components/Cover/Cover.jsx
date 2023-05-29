import { TypeAnimation } from "react-type-animation"
import "./Cover.scss"

function Cover() {

    return (
      <>
        <div className="cover">
          <h1 className="display">
            Hi! <br/>
              <TypeAnimation sequence={[
                'My name is Andrea', 3000,
                'I`m front end developer', 6000,
              ]}
              speed={30}
              repeat={Infinity}
            />
          </h1>
          {/* <h1 className="display">Hi!<br/> My name is <span className="wavyline">Andrea</span></h1> */}
          <p className="big">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ullam obcaecati rem molestias maiores excepturi ratione ipsum sint aut eos, facilis consequatur, nostrum eum reprehenderit. Incidunt expedita veritatis quas doloribus.</p>
        </div>
      </>
    )
  }
  
export default Cover
  