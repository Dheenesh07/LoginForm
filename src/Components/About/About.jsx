import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const username = location.state?.username || "Guest";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome To About Page</h2>
      <h1>Hi, I'm {username}</h1>
      <h3>Software Developer</h3>
    </div>
  );
}

export default About;
