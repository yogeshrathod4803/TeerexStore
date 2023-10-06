import React from "react";
import Style from "../searchBar/SearchBar.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={Style.searchbar}>
        <form>
          <input
            type="text"
            placeholder="Search..."
            // value={searchTerm}
            // onChange={handleInputChange}
          />
          {/* <button type="submit">Search</button> */}
        </form>
      </div>
    </>
  );
};

export default SearchBar;
