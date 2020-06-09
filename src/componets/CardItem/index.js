import React from "react";
import "./style.css"

function ListItem(props) {
  // consider changing to a bootstrap card to get around needing a key
  return (
      <div className="card my-2" >
        <div className="card-body">
            <h4 className="card-title">
            <img className="card-img-top rounded" src={props.picture} alt="Employee Thumbnail"></img> 
                <span className="ml-2 text-right">{props.firstName} {props.lastName}</span>
            </h4>
            <hr />
            <span className="card-text">
                ID: {props.id} <br />
                Phone: {props.phone} <br />
                Email: {props.email} <br />
            </span>
        </div>
      </div>
  )
}

export default ListItem;