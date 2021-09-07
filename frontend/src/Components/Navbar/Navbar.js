import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { MenuSocial } from "./MenuSocial";
import "./Navbar.css";
// import "./Navbar1.css"
import { Button } from "../Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

class Navbar extends Component {
    
    
  state = { clicked: false, hamOpen: false, icon: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleChange = () => {
    this.setState({ hamOpen: !this.state.hamOpen });
  };
  handleIcon = () => {
    this.setState({ icon: !this.state.icon });
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.hamOpen ? (
          <section >  
            <div className = "content">
            <nav
              className={
                this.state.hamOpen ? "NavbarItems active" : "NavbarItems"
              }
            >
              
              <div className="menu-icon" onClick={this.handleClick}>
                <i
                  className={
                    this.state.clicked ? "fas fa-times" : "fas fa-bars"
                  }
                ></i>
              </div>
              <div>
              <Grid container>
                  <Grid item lg={6} xs={6}>
                      <h3 className="logo" >Coding Club</h3>
                      </Grid>
                      <Grid item lg={6} xs={6}>
                       <Link className="login-link" to="/login">Login 
                       <ArrowRightAltIcon />
                       </Link>
                      </Grid>
              </Grid>
              <Grid container  style={{padding:"4%",paddingTop:"0" , paddingBottom: "0"}}>
                  <Grid item xs={3} alignItems="center">
                      <Grid container>
                      {/* {MenuItems.map((item, index) => {
                  return (
                    <Grid xs={12} key={index} style={{ paddingBottom: "2rem" }} >
                      <Link className={item.cName} to={item.url}>
                        {item.title}
                      </Link>
                    </Grid>
                  );
                })} */}
                <Grid xs={12} style={{ paddingBottom: "1rem" }}>
                <h1 className = "NavTextHeading">Bits Pilani</h1>
              <p className = "NavText">Bits Pilani Pilani Campus</p>
              
                  </Grid>
                  <Grid xs={12} style={{ paddingBottom: "1rem" }}>
                <h1 className = "NavTextHeading">Bits Pilani</h1>
              <p className = "NavText">Bits Pilani Pilani Campus</p>
              
                  </Grid>

                          </Grid>
                    
                  </Grid>
                  <Grid item xs={3}>
                      <Grid container>
                      <Grid xs={12} style={{ paddingBottom: "1rem" }}>
                <h1 className = "NavTextHeading">Bits Pilani</h1>
              <p className = "NavText">Bits Pilani Pilani Campus</p>
              
                  </Grid>
                  <Grid xs={12} style={{ paddingBottom: "1rem" }}>
                <h1 className = "NavTextHeading">Bits Pilani</h1>
              <p className = "NavText">Bits Pilani Pilani Campus</p>
              
                  </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                      <Grid container>
                      {MenuItems.map((item, index) => {
                  return (
                    <Grid xs={12} key={index} style={{ paddingBottom: "2rem" }} align="center" >
                      <Link className={item.cName} to={item.url}>
                        {item.title}
                      </Link>
                    </Grid>
                  );
                })}
                          </Grid>
                    
                  </Grid>
                  <Grid item xs={2}>
                    <div>
                      <Grid container >
                      {MenuSocial.map((item, index) => {
                  return (
                    <Grid xs={12} key={index} style={{ paddingBottom: "2rem" }} align="center">
                      <Link className={item.cName} to={item.url}>
                        {item.title}
                      </Link>
                    </Grid>
                    
                  );
                })}
                          </Grid>
                          
                          </div>
                    
                  </Grid>
              </Grid>
              <Grid container>
                            <Grid item lg={12} xs={12} align="center">
                            <button className="hamclose" onClick={this.handleChange}>
                <i className="fas fa-angle-double-up"></i>
              </button>
                            </Grid>
                          </Grid>
                          {/* <Grid container> */}
                          {/* <svg
              viewBox="0 0 200 90"
              style={{ marginTop: "-25%", zIndex: "1" }}
              className="shape"
            >
              <defs>
                <linearGradient id="grad">
                  <stop stop-color="#04619f" />
                  <stop offset="60%" stop-color="black" />
                </linearGradient>
              </defs>
              <path fill="url(#grad)" d="  M 0,50 C 0,100  200,100  200,50 " />
            </svg> */}
                          {/* </Grid> */}
              </div>
                </nav>
            
            </div>
          </section>
        ) : (
          <Grid container alignItems="center" justifyContent="center">
            <button
              className="btnham"
              onClick={() => {
                this.handleIcon();
                this.handleChange();
              }}
              // onClick = {this.handleIcon}
              onMouseEnter={this.handleIcon}
              onMouseLeave={this.handleIcon}
            >
              <i
                className={
                  this.state.icon ? "fas fa-angle-double-down" : "fas fa-bars"
                }
              ></i>
            </button>
            <svg
              viewBox="0 0 200 90"
              style={{ marginTop: "-38%", zIndex: "1", opacity: "1" }}
              className="shape"
            >
              <defs>
                {/* <linearGradient id="grad">
                  <stop stop-color="#b82e1f" />
                  <stop offset="60%" stop-color="black" />
                </linearGradient> */}
              </defs>
              <path opacity = "0.5" d="  M 0,50 C 0,100  200,100  200,50 " />
            </svg>
          </Grid>
        )}
        
      </div>
    );
  }
}

export default Navbar;
