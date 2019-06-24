import React from "react";
import "./index.scss";
import Card from "./card";
import { Link } from "react-router-dom";

const MySercive = () => {
  return (
    <div className="container mt-5 text-center">
      <h4 className="text-center mb-3" style={{ fontWeight: 300 }}>
        MY SERVICES
      </h4>
      <hr />

      <div className="box">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <Card title="NodeJS Development" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <Card title="ReactJS Development" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <Card title="iOS App Development" />
            </div>
          </div>
          <div className="d-flex justify-content-center row-hl">
            <div className="p-4 item-hl">
              <Link id="btn-my-2nd" to="/services">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySercive;
