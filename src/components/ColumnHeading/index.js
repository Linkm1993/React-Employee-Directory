import React from "react";

function ColumnHeading(props) {
  return (
  <div className="row">
    <div className="col-md">
      <button className="btn btn-primary btn-block">ID</button>
    </div>
    <div className="col-md">
      <button className="btn btn-primary btn-block" onClick={props.handleNameSort} value={props.value}>Name</button>
    </div>
    {/* <div className="col-md">
      <button className="btn btn-primary btn-lg btn-block">Email</button>
    </div>
    <div className="col-md">
      <button className="btn btn-primary btn-lg btn-block">DOB</button>
    </div>
    <div className="col-md">
      <button className="btn btn-primary btn-lg btn-block">Phone</button>
    </div> */}
  </div>);
}

export default ColumnHeading;