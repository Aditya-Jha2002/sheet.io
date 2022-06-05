import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.btn} style={{ "min-width": props.minWidth }}>
      {props.children}
    </button>
  );
};

export default Button;
