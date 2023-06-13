import { useMediaQuery } from "react-responsive";
import Button from "../Atoms/Button/Button";
import "./Filter.scss";
import React from "react";

function Filter({ onFilter }) {
  const handleButtonClick = (filter) => {
    onFilter(filter);
  };

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 40rem)' });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(!open);
  }

  return (
    <div className="filter">
      {isTabletOrMobile ? 
        <>
          <button aria-label="button that opens the filter options" onClick={handleOpen} className='filter__btn'>Filter projects 
              <svg className='dropdown__svg' width="12" height="8" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0L6 4.59L10.59 0L12 1.42L6 7.42L0 1.42L1.41 0Z"/>
              </svg>
          </button>
          {open ?
            <>
            <div className="filter__wrap">
              <Button ariaButton="button that filters by All projects" content="All" onClick={() => handleButtonClick("All")}/>
              <Button ariaButton="button that filters by Code projects" content="Code" onClick={() => handleButtonClick("html")}/>
              <Button ariaButton="button that filters by framework projects" content="Frameworks" onClick={() => handleButtonClick("frameworks")}/>
              <Button ariaButton="button that filters by cms projects" content="CMS's" onClick={() => handleButtonClick("cms")}/>
            </div>
          </>
            : "" 
          }
        </>
        : 
        <>
          <div className="h6">Filter:</div>
          <Button ariaButton="button that filters by all projects" content="All" onClick={() => handleButtonClick("All")}/>
          <Button ariaButton="button that filters by code projects" content="Code" onClick={() => handleButtonClick("html")}/>
          <Button ariaButton="button that filters by framework projects" content="Frameworks" onClick={() => handleButtonClick("frameworks")}/>
          <Button ariaButton="button that filters by cms projects" content="CMS's" onClick={() => handleButtonClick("cms")}/>
        </> 
      }
    </div>
  );
}

export default Filter;