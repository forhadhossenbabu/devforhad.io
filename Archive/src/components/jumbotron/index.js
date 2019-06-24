import React from "react";
import "./index.scss";

const Jumbotron = props => {
  return (
    <div id="cover">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1
            className="title display-3 text-center"
            style={{ fontWeight: "100" }}
          >
            dev
            <strong
              style={{ fontWeight: "600", color: "rgb(10, 33, 99) !important" }}
            >
              Forhad
            </strong>
            .io
          </h1>
          <h4 className="text-center string-1">{props.subTitle}</h4>
          <div className="d-flex justify-content-center row-hl">
            <div className="p-4 item-hl">
              <a
                id="btn-my-2nd"
                href="https://drive.google.com/file/d/1b-8g9aH0kfi7C-QIo7cI7Oe_q2NW-75D/view?usp=sharing"
                target="blank"
              >
                Download Resume
              </a>
            </div>
            <div className="p-4 item-hl">
              <a
                id="btn-my-2nd"
                href="https://github.com/devforhad"
                target="blank"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
