import React from "react";
import "./index.scss";

const Pricing = () => {
  return (
    <section id="bs-pricing-five" className="bs-pricing-five">
      <div className="container">
        <h4 className="text-center" style={{ fontWeight: 300 }}>
          MY HOURLY DEMAND
        </h4>
        <hr />
        <div className="row">
          <div className="bs-five-area bs-radius">
            <div className="col-md-3 no-padding">
              <div className="bs-five">
                <h6 className="text-uppercase">Javascript</h6>
                <h1 className="bs-caption">
                  <sup>$</sup>22<small>hr</small>
                </h1>
                <p>Unlimited Revision</p>
                <ul>
                  <li>
                    <b>Include Source Code</b>
                  </li>
                  <li>24/7 Customer Support</li>
                  <li> </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 no-padding">
              <div className="bs-five active">
                <h6 className="text-uppercase">ReactJS</h6>
                <h1 className="bs-caption">
                  <sup>$</sup>18<small>hr</small>
                </h1>
                <p>Unlimited Revision</p>
                <ul>
                  <li>
                    <b>Include Source Code</b>
                  </li>
                  <li>24/7 Customer Support</li>
                  <li> </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 no-padding">
              <div className="bs-five">
                <h6 className="text-uppercase">React Native</h6>
                <h1 className="bs-caption">
                  <sup>$</sup>21<small>hr</small>
                </h1>
                <p>Unlimited Revision</p>
                <ul>
                  <li>
                    <b>Include Source Code</b>
                  </li>
                  <li>24/7 Customer Support</li>
                  <li> </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 no-padding">
              <div className="bs-five">
                <h6 className="text-uppercase">NodeJS</h6>
                <h1 className="bs-caption">
                  <sup>$</sup>25<small>hr</small>
                </h1>
                <p>Unlimited Revision</p>
                <ul>
                  <li>
                    <b>Include Source Code</b>
                  </li>
                  <li>24/7 Customer Support</li>
                  <li> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
