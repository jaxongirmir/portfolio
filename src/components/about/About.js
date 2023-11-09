import React from "react";
import { INFO } from "../../static";

function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="top__about">
          <div className="line"></div>
          <span>some info</span>
        </div>
        <h1>About me</h1>
        <p>{INFO}</p>
      </div>
    </>
  );
}

export default About;
