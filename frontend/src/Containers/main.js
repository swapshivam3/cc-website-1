import Home from "./Home/AliterHome";
import OurTeam from "./OurTeam/OurTeam";
import React from "react";
import Login from "../Components/Login/Login";
import Departments from "./Departments/Departments";
import Navbar from "../Components/Navbar/Navbar";
import BlogCards from "../Components/Blogcards/blogcard";
import OurProjects from "../Components/OurProjects/Ourprojects";
import Profile from "../Components/Profile/Profile";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <Router>
      <div className="relative z-10 text-white">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ourteam" component={OurTeam} />
          <Route path="/departments" component={Departments} />
          <Route path="/login" component={Login} />
          <Route path="/blog" component={BlogCards} />
          <Route path="/ourProjects" component={OurProjects} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}
export default Main;
