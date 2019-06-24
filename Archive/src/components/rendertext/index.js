import React from "react";

const RenderText = props => {
  return (
    <div className="container mt-5 mb-5">
      <h4 className="text-center mb-2" style={{ fontWeight: 300 }}>
        {props.header}
      </h4>
      <hr />
      <h6
        style={{ fontWeight: 200, lineHeight: "30px" }}
        className={props.center ? "text-center mb-4" : "mb-4"}
      >
        {props.content}
      </h6>
    </div>
  );
};

export default RenderText;
