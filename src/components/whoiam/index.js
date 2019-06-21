import React from "react";
import "./index.scss";

const WhoIam = () => {
  return (
    <main className="container mt-5">
      <h4 className="text-center" style={{ fontWeight: 300 }}>
        WHO I AM
      </h4>
      <hr />
      <div className="row">
        <div className="col-md-6 col-sm-8">
          <h6 style={{ fontWeight: 200, lineHeight: "30px" }}>
            {" "}
            I am a highly talented, experienced, professional and cooperative
            software engineer, I am working in programming and web world for
            more than 4 years .I assure you a wide range of quality IT services.
            Web development, mobile app development and UI design the major
            filed i am expert in. Moreover i have learning passion. I makes
            small and big projects as open source. My over all skill makes me a
            complete software developer, so you can hire me for your projects
          </h6>
        </div>
        <div className="col-md-6 col-sm-8 skill">
          <div className="progress-item">
            <h6 style={{ fontWeight: 200 }}>
              Android App Development | React Native
            </h6>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div className="progress-item">
            <h6 style={{ fontWeight: 200 }}>
              iOS App Development | React Native
            </h6>

            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div className="progress-item">
            <h6 style={{ fontWeight: 200 }}>
              {" "}
              Web Frontend Development | React Redux
            </h6>

            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "97%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div className="progress-item">
            <h6 style={{ fontWeight: 200 }}>
              Web Backend Development | NodeJS
            </h6>

            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhoIam;
