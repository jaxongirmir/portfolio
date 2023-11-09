import React from "react";
import { PROJECTS } from "../static";

function Projects() {
  return (
    <>
      <div className="projects" id="projects">
        <div className="top__projects">
          <div className="line"></div>
          <span>My projects</span>
        </div>
        <h1>Projects</h1>
        <div className="carts">
          {PROJECTS?.map(({ id, title, url, img, used }) => (
            <div className="cart" key={id}>
              <div className="top__cart">
                <a href={url} target="_blan">
                  <img src={img} alt="img of site" />
                </a>
              </div>
              <div className="bottom__cart">
                <h2>{title}</h2>
                <p>Technologies Used:</p>

                <div className="btns">
                  {used?.map((item, index) => (
                    <button key={index}>{item}</button>
                  ))}
                </div>
                <a href={url} target="_blank">
                  <button>View</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
