import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 ">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h2 className=" display-8" style={{ fontWeight: "100" }}>
              dev<strong style={{ fontWeight: "500" }}>Forhad</strong>.io
            </h2>
            <p>Software Engineer | Enthusiastic Javascript Developer</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Code Snippets</h5>

            <ul className="list-unstyled">
              <li>
                <a href="https://codepen.io/findforhad" target="blank">
                  CodePen.io
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Dev Profiles</h5>

            <ul className="list-unstyled">
              <li>
                <a
                  href="https://linkedin.com/in/forhad-hossen-52aa70176/"
                  target="blank"
                >
                  Linked In
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/10988325/forhad-hossen"
                  target="blank"
                >
                  Stackoverflow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        <code style={{ fontWeight: 100 }}>
          built with React v16.18.6 | © under devforhad.io 2016-2019
        </code>
      </div>
    </footer>
  );
};

export default Footer;
