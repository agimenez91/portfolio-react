import Button from "../Atoms/Button/Button"
import "./Filter.scss"

function Filter() {

    return (
      <>
        <div className="filter">
          <Button content='All'></Button>
          <Button content='Design'></Button>
          <Button content='Development'></Button>
        </div>
      </>
    )
  }
  
export default Filter
  