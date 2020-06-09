import React from "react";

function Container(props) {
    return (
    <div className={`container${props.fluid ? "-fluid" : ""} bg-light`}>
      {props.children}
    </div>);
  }

export default Container;