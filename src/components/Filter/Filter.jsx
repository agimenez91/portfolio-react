import Button from "../Atoms/Button/Button";
import "./Filter.scss";

function Filter({ onFilter }) {
  const handleButtonClick = (filter) => {
    onFilter(filter);
  };

  return (
    <div className="filter">
      <Button content="All" onClick={() => handleButtonClick("All")} />
      <Button content="Design" onClick={() => handleButtonClick("design")} />
      <Button
        content="Development"
        onClick={() => handleButtonClick("development")}
      />
    </div>
  );
}

export default Filter;