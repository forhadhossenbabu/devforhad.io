import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/jumbotron";
import FunFact from "../../components/funfact";
import "./index.scss";

const apiurl = "https://devforhadio.herokuapp.com";

class Portfolio extends React.Component {
  state = {
    projects: [],
    loading: true
  };
  componentDidMount() {
    axios.get(`${apiurl}/api/v1/projects`).then(res => {
      this.setState({ projects: res.data, loading: false });
      console.log(res);
    });
  }

  handleDelete = id => {
    var token = prompt("Enter the authorization token");
    if (token)
      axios
        .delete(`${apiurl}/api/v1/project/${id}`, {
          headers: {
            authuri: token
          }
        })
        .then(res => {
          alert("Portfolio Item Has Been Deleted");
          if (res.data.status === true) {
            this.setState({
              projects: this.state.projects.filter(p => p._id !== id)
            });
          }
        })
        .catch(err => {
          if (err)
            alert("Portfolio Item Not Deleted. Valid Token is required.");
        });
    else alert("Item Not Deleted");
  };

  render() {
    return (
      <main>
        <Jumbotron subTitle="I have not failed. I've just found 10,000 ways that won't work." />
        <div className="container">
          <h4 className="text-center" style={{ fontWeight: 300 }}>
            FUN FACT
          </h4>
          <hr />
          <FunFact />
          <div>
            <h4 className="text-center" style={{ fontWeight: 300 }}>
              MY SORT & BIG PROJECTS
            </h4>
            <hr />
            {this.state.loading ? (
              <div className="d-flex justify-content-around row-hl">
                <Link
                  href="#"
                  className="intro-banner-vdo-play-btn pinkBg"
                  to="/"
                >
                  <i
                    className="glyphicon glyphicon-play whiteText"
                    aria-hidden="true"
                  />
                  <span className="ripple pinkBg" />
                  <span className="ripple pinkBg" />
                  <span className="ripple pinkBg" />
                </Link>
                <h4 style={{ fontWeight: "200" }}>Loading...</h4>
              </div>
            ) : (
              <div className="row pt-3 m-auto">
                {this.state.projects.map(project => (
                  <div className="col-md-6 mb-5" key={project._id}>
                    <div className="card card-custom ">
                      <div
                        className="card-custom-img"
                        style={{
                          backgroundPosition: "unset",
                          border: "1px solid rgb(37, 63, 65)"
                        }}
                      >
                        <img
                          src={`data:${project.image.mimetype};base64,${
                            project.image.base64string
                          }`}
                          height="100%"
                          width="100%"
                          alt="Not Given"
                        />
                      </div>

                      <div className="card-body" style={{ overflowY: "auto" }}>
                        <h3 className="card-title" style={{ fontWeight: 200 }}>
                          {project.title}
                        </h3>
                        <h5 className="card-title" style={{ fontWeight: 200 }}>
                          {project.subTitle}
                        </h5>
                        <h6
                          className="card-text"
                          style={{
                            fontWeight: 100,
                            height: "60px",
                            lineHeight: "24px",
                            marginBottom: "20px"
                          }}
                        >
                          {project.desc}
                        </h6>
                        <b style={{ fontWeight: 400 }}>Technology Used :-</b>
                        <ul style={{ height: "100px" }}>
                          {project.features.map((f, i) => (
                            <li key={i} style={{ fontWeight: 100 }}>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className="card-footer"
                        style={{
                          background: "inherit",
                          borderColor: "inherit"
                        }}
                      >
                        <div className="d-flex justify-content-around row-hl">
                          {project.githubRepo ? (
                            <div className="p-4 item-hl">
                              <a
                                href={project.githubRepo}
                                id="btn-my-2nd"
                                target="blank"
                              >
                                View On GitHub
                              </a>
                            </div>
                          ) : (
                            <span className="text-danger mt-3">
                              Private Code
                            </span>
                          )}
                          {project.previewLink ? (
                            <div className="p-4 item-hl">
                              <a
                                href={project.previewLink}
                                id="btn-my-2nd"
                                target="blank"
                              >
                                Preview Link
                              </a>
                            </div>
                          ) : (
                            <span className="text-danger mt-3">
                              Preview Private
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        style={{ display: "none" }}
                        onClick={() => this.handleDelete(project._id)}
                        className="btn btn-danger"
                      >
                        {project._id}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default Portfolio;
