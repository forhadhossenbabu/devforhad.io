import React, { Component } from "react";
import Jumbotron from "../../components/jumbotron";
import WhoIam from "../../components/whoiam/";
import MyArch from "../../components/myarch";
import MySercive from "../../components/myservice";
import Testimonial from "../../components/testimonial";
import ContactFrom from "../../components/contactform";

export default class Home extends Component {
  render() {
    return (
      <main>
        <Jumbotron subTitle="Software Engineer | Enthusiastic Javascript Developer | Freelancer at Fiverr" />
        <WhoIam />
        <MyArch />
        <MySercive />
        <Testimonial />
        <ContactFrom />
      </main>
    );
  }
}
