import React, { useState , useEffect } from "react";
import DepartmentDetails from "../DepartmentDetails/DepartmentDetails";
import PopUp from "./PopUp/PopUp";
import "./DepartmentCard.css";



export default function App(props) {
  const options = {
    max: 30,
    scale: 1.5,
    speed: 1000,
  };



  return (
    <div className="container11">
      <div class="card1">
                <div class="item-dept itemd1">
                    <div class="content">
                        <img src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?size=626&ext=jpg" alt="unicorn" />
                        <h3>design</h3>
                    </div>
                </div>
                <div class="item-dept itemd2">
                    <p>
                        An error occurred while checking for updates: Unable to connect to the Internet. If you use a firewall, please whitelist GoogleUpdate.exe.
                    </p>
                    <a href="#"> Meet Our Team </a>
                </div>
            </div>
    </div>
  );
}

