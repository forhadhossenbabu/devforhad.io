import React from "react";
import ReCaptcha from "react-google-recaptcha";
import { Link } from "react-router-dom";
import "./index.scss";
import axios from "axios";
const apiurl = "https://devforhadio.herokuapp.com";

// let sitekey = "6Ld1MKkUAAAAAMoSMiKqkaRwOUKR2N95gPVf0cMy";
// let sitekeylocalhost = "6LfxMKkUAAAAAD_1letzQYcKnYfibDWzdw-H1D8q";
// let secretkey = "6Ld1MKkUAAAAAEiAoh9EJmOx7LbLRAlVVe0O-NO4";

class ContactFrom extends React.Component {
  state = {
    token: false,
    name: "",
    email: "",
    skype: "",
    message: "",
    error: {},
    subsEmail: "",
    subsemailerr: "",
    formSubmitted: false,
    subscribed: false
  };

  handleCapthcha = value => {
    if (value) this.setState({ token: true });
    else this.setState({ token: false });
  };

  hanldeChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: {} });
  };

  handleSubmit = e => {
    e.preventDefault();

    const error = {};
    const { name, email, message, skype, token } = this.state;

    if (!name || name.length < 3) {
      error.name = "Name is Required. It has to be > 3 char";
    }
    if (!email || email.length < 7) {
      error.email = "Email is Required. It has to be a valid email";
    }
    if (!message || message.length < 15) {
      error.message = "Message is Required. It has to be > 15 char";
    }

    if (token === false) {
      error.token = "Prove You Are Human";
    }

    console.log(Object.keys(error).length);
    if (Object.keys(error).length !== 0) return this.setState({ error });

    const dataToSubmit = {
      name,
      email,
      skype,
      message
    };
    //Call the mail server here
    axios.post(`${apiurl}/api/v1/contactform`, dataToSubmit).then(res => {
      if (res.data.status === true) {
        this.setState({ formSubmitted: true });
      }
    });
  };

  handleEmailChange = e => {
    this.setState({ subsEmail: e.target.value, subsemailerr: null });
  };

  handleSubscription = e => {
    e.preventDefault();
    if (this.state.subsEmail === "" || this.state.subsEmail.length < 7)
      return this.setState({
        subsemailerr: "Email is Required. It has to be a valid email"
      });

    console.log(this.state.subsEmail);

    axios
      .post(`${apiurl}/api/v1/subscribe`, {
        email: this.state.subsEmail
      })
      .then(res => {
        if (res.data) {
          this.setState({ subscribed: true });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({
            subsemailerr: "Email is already exits"
          });
        }
      });
  };

  render() {
    const { error, token } = this.state;
    return (
      <div className="container mt-5 mb-6">
        <h4 className="text-center mb-3" style={{ fontWeight: 300 }}>
          LET'S BE WITH ME
        </h4>
        <hr />
        <p className="pt-2 pb-2 text-center" style={{ fontWeight: 200 }}>
          If you need anything urgent then please submit the form. Provide skype
          if you have one.
        </p>
        <div className="row">
          <div className="col-md-7">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label style={{ fontWeight: 200 }}>Your Name</label>
                <input
                  type="text"
                  className={
                    error.name
                      ? "input-item form-control invalid"
                      : "input-item form-control"
                  }
                  placeholder="Enter your full name"
                  name="name"
                  onChange={this.hanldeChange}
                />
                <small className="form-text text-danger">
                  {error.name ? error.name : null}
                </small>
              </div>
              <div className="form-group">
                <label style={{ fontWeight: 200 }}>Your Email</label>
                <input
                  name="email"
                  //   required
                  type="email"
                  className={
                    error.email
                      ? "input-item form-control invalid"
                      : "input-item form-control"
                  }
                  placeholder="Enter your email address"
                  onChange={this.hanldeChange}
                />
                {error.email ? (
                  <small className="form-text text-danger">{error.email}</small>
                ) : (
                  <small className="form-text text-muted">
                    I'll never share your email with anyone else.
                  </small>
                )}
              </div>
              <div className="form-group">
                <label style={{ fontWeight: 200 }}>Your Skype</label>
                <input
                  type="text"
                  name="skype"
                  className="form-control input-item"
                  placeholder="Enter your skype"
                  onChange={this.hanldeChange}
                />

                <small id="emailHelp" className="form-text text-muted">
                  It is optional but it can help us to communicate instantly.
                </small>
              </div>
              <div className="form-group">
                <label style={{ fontWeight: 200 }}>Your Message</label>
                <textarea
                  placeholder="Type your message"
                  className={
                    error.message
                      ? "input-item form-control invalid"
                      : "input-item form-control"
                  }
                  rows="5"
                  name="message"
                  onChange={this.hanldeChange}
                />
                {error.message ? (
                  <small className="form-text text-danger">
                    {error.message}
                  </small>
                ) : (
                  <small id="emailHelp" className="form-text text-muted">
                    Why you want to contact ? Which service you need ?
                  </small>
                )}
              </div>
              <div className="form-group">
                <ReCaptcha
                  sitekey="6Ld1MKkUAAAAAMoSMiKqkaRwOUKR2N95gPVf0cMy"
                  onChange={this.handleCapthcha}
                />
                <small className="form-text text-danger">
                  {token === false ? error.token : null}
                </small>
              </div>
              <button type="submit" id="btn-my-2nd">
                Submit Form
              </button>
            </form>
            {this.state.formSubmitted === false ? null : (
              <p className="text-success">Form Submitted</p>
            )}
          </div>
          <div className="col-md-5">
            <div className="container">
              <div className="row">
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
              </div>
            </div>
            <div id="container">
              <form onSubmit={this.handleSubscription}>
                <h5 style={{ fontWeight: 200 }}>
                  Stay Updated With My Newsletter
                </h5>
                <input
                  type="email"
                  placeholder="Type your email address"
                  onChange={this.handleEmailChange}
                />
                <br />
                <small className="text-danger">
                  {this.state.subsemailerr ? this.state.subsemailerr : null}
                </small>

                {this.state.subscribed === true ? (
                  <small className="text-success"> You Are Subscribed</small>
                ) : null}
                <br />
                <button type="submit" id="btn-my-2nd">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactFrom;
