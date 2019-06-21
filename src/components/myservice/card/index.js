import React from "react";
import "./index.scss";

const Card = props => {
  return (
    <div className="service-single text-center">
      <div className="box-top">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Card;
