import React from "react";
import Jumbotron from "../../components/jumbotron";
import RenderText from "../../components/rendertext";
import brad from "./brad.jpeg";
import mosh from "./mosh.jpg";
import max from "./max.jpeg";
import forhad from "./forhad.png";

const AboutMe = () => {
  return (
    <main>
      <Jumbotron subTitle="Live as if you were to die tomorrow. Learn as if you were to live forever." />
      <div className="container">
        <RenderText
          header="Forhad Hossen"
          content="Software Consultant. Focused on Enterprise Based Software Solution. Software Development is my Passion Which I Working on."
          center={true}
        />
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 text-white bg-dark">
              <img className="card-img-top" src={forhad} alt="Card" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="progress-item">
              <h6 style={{ fontWeight: 200 }}>
                Javascript | ECMAScript Standerd
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
              <h6 style={{ fontWeight: 200 }}>NodeJS | V8 Mechanism</h6>
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
            <div className="progress-item mb-4">
              <h6 style={{ fontWeight: 200 }}>ReactJS | ReduxJS</h6>
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
            <div className="progress-item mb-4">
              <h6 style={{ fontWeight: 200 }}>React Native Android^ | iOS^</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <div className="progress-item mb-4">
              <h6 style={{ fontWeight: 200 }}>MongoDB | Firebase</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <div className="progress-item mb-4">
              <h6 style={{ fontWeight: 200 }}>SQL | MySQL | SQLite</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <RenderText
          header="MY TEACHERS"
          content="To be successful in anything, you have to have a passion for it, and that leads to being enthusiastic and demanding. I didn't have it for history. So I wouldn't have been a good teacher in that area. But I had it for basketball. And that's what coaching is at every level: it's about teaching."
          center={true}
        />
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 text-white bg-dark">
              <img className="card-img-top" src={brad} alt="Card" />
              <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: 200 }}>
                  Brad Traversy
                </h4>
                <p className="card-text" style={{ fontWeight: 100 }}>
                  Programmer | Developer | Lecturer
                </p>
                <a
                  href="https://www.udemy.com/user/brad-traversy"
                  target="blank"
                  id="btn-my-2nd"
                  style={{ fontWeight: 100 }}
                >
                  View on Udemy
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 text-white bg-dark">
              <img className="card-img-top" src={mosh} alt="Card" />
              <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: 200 }}>
                  Mosh Hamedani
                </h4>
                <p className="card-text" style={{ fontWeight: 100 }}>
                  Creative Software Engineer | Lecturer
                </p>
                <a
                  href="https://www.udemy.com/user/moshfeghhamedani"
                  target="blank"
                  id="btn-my-2nd"
                  style={{ fontWeight: 100 }}
                >
                  View on Udemy
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 text-white bg-dark">
              <img className="card-img-top" src={max} alt="Card" />
              <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: 200 }}>
                  Maximilian Schwarzmüller
                </h4>
                <p className="card-text" style={{ fontWeight: 100 }}>
                  Owner of Academind | Lecturer
                </p>
                <a
                  href="https://www.udemy.com/user/academind/"
                  target="blank"
                  id="btn-my-2nd"
                  style={{ fontWeight: 100 }}
                >
                  View on Udemy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RenderText
        header="MY MISSION"
        content="My mission is to develop unique idea and quality software that will secure top ranking in marketplace, people's system and people's heart. Develop robust, secure, dynamic, responsive software for all platform (computer, tab, mobile phone). Provide top notch customer service, customization of our product according to customer demand and current technology. Planning advanced techniques for optimization, user experience and satisfaction of customer for our software. Planning flexible software that will not be bounded by any linguistic or regional restriction. I want to flourish software that can blow people's heart and soul."
      />
      <RenderText
        header="MY VISION"
        content="My vision is to brand our firm as the best firm in the world. Secure the top place among software providers for both local and international market. Brand our country as the best software provider country. Create employment for youth on the field of both software and corporate level. Provide our country and world with superior software. Nurture youths to be highly skilled software engineers."
      />
    </main>
  );
};

export default AboutMe;
