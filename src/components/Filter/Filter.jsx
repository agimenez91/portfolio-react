import Button from "../Atoms/Button/Button";
import "./Filter.scss";

function Filter({ onFilter }) {
  const handleButtonClick = (filter) => {
    onFilter(filter);
  };

  return (
    <div className="filter">
      <Button href="#projects" content="All" onClick={() => handleButtonClick("All")} />
      <Button href="#projects" content="Code" onClick={() => handleButtonClick("html")} />
      <Button href="#projects" content="Frameworks" onClick={() => handleButtonClick("frameworks")} />
      <Button href="#projects" content="CMS's" onClick={() => handleButtonClick("cms")} />
    </div>
  );
}

export default Filter;