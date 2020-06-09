import React from "react";

function SearchBar(props) {
  return (
    <div >
      <form className="form form-row my-2">
          <div className="col">
            <input
              value={props.value}
              name="search"
              onChange={props.handleInputChange}
              type="text"
              placeholder="Search for an Employee by First Name"
              className="form-control"
            />
          </div>
          <div className="col-2">
            <button onClick={props.handleFormSubmit} className="btn btn-primary btn-block">Submit</button>
          </div>
      </form>
    </div>
  );
}

export default SearchBar;