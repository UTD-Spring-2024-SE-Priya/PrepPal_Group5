import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <><nav className="navbar navbar-default">
    <div style={{backgroundColor: "#A3B18A"}}class="container-fluid">
      {/* <div class="navbar-header">
        <a class="navbar-brand" >PrepPal</a>
      </div> */}
      <ul className="nav navbar-nav">
        {/* <li class="active">Home</li> */}
        <li style={{ marginBottom: "10px", justifyContent: "" }}>
            <Link to="/login" style={{ color: "#344E41", textDecoration: "none" }}>
              Log in
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/signup" style={{ color: "#344E41", textDecoration: "none" }}>
              Sign Up
            </Link>
          </li>
      </ul>
    </div>
  </nav><div style={{ height: "100vh", padding: "45px", backgroundColor: "#344E41", color: "#DAD7CD" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Welcome to PrepPal! Click on the Log in or Sign Up to get started with your meal planning!
        </p>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {/* <li style={{ marginBottom: "10px" }}>
            <Link to="/login" style={{ color: "#DAD7CD", textDecoration: "none" }}>
              Log in
            </Link>
          </li> */}
          {/* <li style={{ marginBottom: "10px" }}>
            <Link to="/signup" style={{ color: "#DAD7CD", textDecoration: "none" }}>
              Sign Up
            </Link>
          </li> */}
          <li>
            <img style={{ height: "70vh", padding: "25px", marginBottom: "25px"}} src="https://www.eatingwell.com/thmb/Ch2LFPGHsQ5kySirTzPLNd0LfdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14-days-clean-eating-meal-plan-1200-lede-601736337d914519bb5bf8eb83540da1.jpg"/>
          </li>
        </ul>
      </div></>
  );
};
export default Home;