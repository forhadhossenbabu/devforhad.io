import React from "react";
import "./index.scss";

class MyArch extends React.Component {
  state = {};
  render() {
    return (
      <div className="container text-center mt-5 mb-5">
        <h4 className="text-center mb-3" style={{ fontWeight: 300 }}>
          HOW I WORK
        </h4>
        <hr />
        <div className="d-flex justify-content-around row-hl">
          <div className="p-4 item-hl">
            <span className="pro-step gradient_bg_two bottom20">
              <i className="far fa-edit" />
            </span>
            <h4 style={{ fontWeight: 200 }} className="mt-3">
              concept
            </h4>
          </div>
          <div className="p-4 item-hl">
            <span className="pro-step gradient_bg_three bottom20">
              <i className="fas fa-cog" />
            </span>
            <h4 style={{ fontWeight: 200 }} className="mt-3">
              planning
            </h4>
          </div>
          <div className="p-4 item-hl">
            <span className="pro-step gradient_bg_one bottom20">
              <i className="far fa-folder-open" />
            </span>
            <h4 style={{ fontWeight: 200 }} className="mt-3">
              design
            </h4>
          </div>
          <div className="p-4 item-hl">
            <span className="pro-step gradient_bg_four bottom20">
              <i className="fas fa-code" />
            </span>
            <h4 style={{ fontWeight: 200 }} className="mt-3">
              development
            </h4>
          </div>
          <div className="p-4 item-hl">
            <span className="pro-step gradient_bg_five bottom20">
              <i className="fas fa-mobile-alt" />
            </span>
            <h4 style={{ fontWeight: 200 }} className="mt-3">
              quality check
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default MyArch;
