import React from "react";

const Navbar = ({ filterItem, categoryList }) => {
  return (
    <nav className="navbar">
      <div className="btn-group">
        {categoryList.map((currElem) => {
          return (
            <button
              className="btn-group__item"
              onClick={() => filterItem(currElem)}
            >
              {currElem}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
