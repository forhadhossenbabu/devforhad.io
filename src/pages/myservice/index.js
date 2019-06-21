import React from "react";
import "./index.scss";
import Jumbotron from "../../components/jumbotron";
import Card from "../../components/myservice/card";
import ContactFrom from "../../components/contactform";
import Pricing from "../../components/pricing";

const MyService = () => {
  return (
    <main>
      <Jumbotron subTitle="Stop chasing the money and start chasing the Passion." />
      <div className="container">
        <h4 className="text-center" style={{ fontWeight: 300 }}>
          MY ALL SERVICES
        </h4>
        <hr />
        <div className="row mb-5">
          <div className="col-md-4">
            <Card title="javascript Development" />
          </div>
          <div className="col-md-4">
            <Card title="REACT REDUX Development" />
          </div>
          <div className="col-md-4">
            <Card title="NodeJS Development" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <Card title="ios app Development" />
          </div>
          <div className="col-md-4">
            <Card title="Android Development" />
          </div>
          <div className="col-md-4">
            <Card title="Landing Page Development" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <Card title="Fixing Buggy Code" />
          </div>
          <div className="col-md-4">
            <Card title="Rebuild Application" />
          </div>
          <div className="col-md-4">
            <Card title="API Development" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <Card title="Single Page Web Application" />
          </div>
          <div className="col-md-4">
            <Card title="Redesign Web Application" />
          </div>
        </div>
      </div>
      <Pricing />
      <ContactFrom />
    </main>
  );
};

export default MyService;
