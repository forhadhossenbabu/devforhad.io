import React from "react";
import axios from "axios";

const apiurl = "https://devforhadio.herokuapp.com";

class AddPortfolio extends React.Component {
  state = {
    image: null,
    title: null,
    subTitle: null,
    desc: null,
    features: null,
    githubRepo: null,
    previewLink: null,
    token: null,
    newProjectSubmitted: null,
    loading: false
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleImageChange = e => {
    this.setState({
      image: e.target.files[0]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("projectImage", this.state.image, this.state.image.name);
    formData.append("title", this.state.title);
    formData.append("subTitle", this.state.subTitle);
    formData.append("desc", this.state.desc);
    formData.append("features", this.state.features);
    if (this.state.githubRepo !== null)
      formData.append("githubRepo", this.state.githubRepo);

    if (this.state.previewLink !== null)
      formData.append("previewLink", this.state.previewLink);

    this.setState({ loading: true });

    if (this.state.token !== null)
      axios
        .post(`${apiurl}/api/v1/addnew`, formData, {
          headers: {
            "content-type": "multipart/form-data",
            authuri: this.state.token
          }
        })
        .then(res => {
          if (res.data._id)
            this.setState({
              newProjectSubmitted: true,
              loading: false
            });
        })
        .catch(err => {
          if (err)
            this.setState({ newProjectSubmitted: false, loading: false });
        });
  };

  render() {
    return (
      <div className="container" style={{ borderTop: "1px solid gold" }}>
        <h1 style={{ fontWeight: 200 }}>Add Portfolio Item</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label style={{ fontWeight: 100 }}>
              Authorization Token{" "}
              <small className="text-danger">Token is must required</small>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter the token"
              name="token"
              onChange={this.handleInputChange}
              required
            />
            <hr />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 100 }}>
              Title <small className="text-danger">Title is required</small>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter project title"
              name="title"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 100 }}>
              Sub Title{" "}
              <small className="text-danger">Sub title is required</small>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter project sub title"
              name="subTitle"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 100 }}>
              Features{" "}
              <small className="text-danger">Use comma to separate value</small>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter project features using comma"
              name="features"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 100 }}>
              Description<span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              placeholder="Enter project description"
              name="desc"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 100 }}>Github Repository</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter the project github repository link"
              name="githubRepo"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 100 }}>Preview Link</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter the project preview link"
              name="previewLink"
              onChange={this.handleInputChange}
            />
          </div>
          <input
            className="mb-3"
            type="file"
            accept="image/png, image/jpeg"
            onChange={this.handleImageChange}
            required
          />
          {this.state.loading ? (
            <div className="d-flex justify-content-around row-hl">
              <h4 style={{ fontWeight: "200" }}>Loading...</h4>
            </div>
          ) : null}
          {this.state.newProjectSubmitted === true ? (
            <div className="d-flex justify-content-around row-hl text-center">
              <h3 className="text-success" style={{ fontWeight: 200 }}>
                New Project Submitted
              </h3>
            </div>
          ) : null}
          {this.state.newProjectSubmitted === false ? (
            <div className="d-flex justify-content-around row-hl text-center">
              <h3 className="text-danger" style={{ fontWeight: 200 }}>
                New Project Not Submitted
              </h3>
              <p className="text-danger mb-5">
                Maybe the project name is already exits or something error
                happend on server
              </p>
            </div>
          ) : null}
          <button className="btn-block mb-5" id="btn-my-2nd">
            Add New Portfolio
          </button>
        </form>
      </div>
    );
  }
}

export default AddPortfolio;
