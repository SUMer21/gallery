import React from "react";
import './style.css';

function Travel(props) {
  return (
    
      <div className="folder">
        <img className="images" src={props.image} alt={props.name} />
    
      
    </div>
  );
}

export default Travel;