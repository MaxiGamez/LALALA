import React from "react";

function Button(props) {
  const stylesButton = {
    backgroundColor: props.color || "purple",
    color: "white",
    padding: "5px 15px",
    borderRadius: "8px",
  };

  return (
    <button className="btn" style={stylesButton} onClick={props.onTouchButton}>
      {props.children}
    </button>
  );
}

export default Button;