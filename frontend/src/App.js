import "./App.css";
import Home from "./Containers/Home/AliterHome";
import OurTeam from "./Containers/OurTeam/OurTeam";

import Login from "./Components/Login/Login"
import Departments from "./Containers/Departments/Departments"
import Navbar from './Components/Navbar/Navbar'
import BlogCards from './Components/Blogcards/blogcard'
import OurProjects from './Components/OurProjects/Ourprojects'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="relative z-10 text-white">
        <h1 className="text-3xl text-center">Temporary Nav</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto flex justify-around">
            <li>
              <Link to={"/home"} className="nav-link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to={"/ourteam"} className="nav-link">
                OurTeam
              </Link>
            </li>
            <li>
              <Link to={"/departments"} className="nav-link">
                Departments
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/ourteam" component={OurTeam} />
          <Route path="/departments" component={Departments} />
          <Route path="/login" component={Login} />
          <Route path="/blog" component={BlogCards} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
