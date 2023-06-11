import Button from "../Atoms/Button/Button";
import "./Filter.scss";

function Filter({ onFilter }) {
  const handleButtonClick = (filter) => {
    onFilter(filter);
  };

  return (
    <div className="filter">
      <Button content="All" onClick={() => handleButtonClick("All")}/>
      <Button content="Code" onClick={() => handleButtonClick("html")}/>
      <Button content="Frameworks" onClick={() => handleButtonClick("frameworks")}/>
      <Button content="CMS's" onClick={() => handleButtonClick("cms")}/>
    </div>
  );
}

export default Filter;