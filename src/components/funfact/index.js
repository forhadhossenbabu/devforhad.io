import React from "react";
import "./index.scss";

const FunFact = () => {
  return (
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="counter_threeup">
          <div className="counter_threeup-photo">
            <img src="http://i.imgur.com/7jmZxc8.png" alt="counter_threeup" />
          </div>
          <div className="counter_threeup-content">
            <h5 className="count-number">63 Website</h5>
            <h6>Designed</h6>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="counter_threeup">
          <div className="counter_threeup-photo">
            <img src="http://i.imgur.com/s3fDOCZ.png" alt="counter_threeup" />
          </div>
          <div className="counter_threeup-content">
            <h5 className="count-number">1542</h5>
            <h6>Hours Worked</h6>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="counter_threeup">
          <div className="counter_threeup-photo">
            <img src="http://i.imgur.com/UYLWCDw.png" alt="counter_threeup" />
          </div>
          <div className="counter_threeup-content">
            <h5 className="count-number">104</h5>
            <h6>Project finished</h6>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="counter_threeup">
          <div className="counter_threeup-photo">
            <img src="http://i.imgur.com/IVfjEcU.png" alt="counter_threeup" />
          </div>
          <div className="counter_threeup-content">
            <h5 className="count-number">59</h5>
            <h6>Drunk coffee</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
