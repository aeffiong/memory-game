import React from "react";

const Container = props => (
  <div className={`container${props.fluid ? "-fluid full-height" : ""}`}>
    {props.children}
  </div>
);

export default Container;