import React from "react";
import "./index.scss";

const ReviewCard = props => {
  return (
    <div className="testimoni">
      <div className="pic">
        <img
          src={props.image}
          alt="Profile"
          title="Profile"
          className="profile"
        />
        <p>{props.review}</p>
      </div>
      <h4>{props.name}</h4>
      <small>{props.title}</small>
    </div>
  );
};

export default ReviewCard;
