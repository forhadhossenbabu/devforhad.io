import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//Components
import Home from "./pages/home";
import AboutMe from "./pages/aboutme";
import MyService from "./pages/myservice";
import Portfolio from "./pages/portfolio";
import AddPortfolio from "./pages/addportfolio";

class Routes extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={AboutMe} exact path="/about" />
          <Route component={MyService} exact path="/services" />
          <Route component={Portfolio} exact path="/portfolio" />
          <Route component={AddPortfolio} exact path="/addportfolio" />
        </Switch>
        <Footer />
      </main>
    );
  }
}
export default Routes;
