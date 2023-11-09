import React from "react";
import { DATA } from "../../static";

function About() {
  return (
    <>
      <div className="skill" id="skill">
        <div className="top__skill">
          <div className="line"></div>
          <span>Check out my</span>
        </div>
        <div className="bottom__skill">
          {DATA?.map(({ id, img, title }) => (
            <div className="cart" key={id}>
              <img src={img} alt="img of skills" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
