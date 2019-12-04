import React from "react";
import "../App.css";

const Cash = props => {
  const value = (props.cash * props.ratio).toFixed(2);
  return (
    <>
      <p className="countries">{props.title}</p>
      <span
        className="cash"
        style={value.toString().length > 5 ? { fontSize: "28px" } : {}}
      >
        {props.cash <= 0 ? "" : value}
      </span>
    </>
  );
};

export default Cash;
