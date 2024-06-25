import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import aziizpf from "../../assets/aziizpf.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} />
      </div>
      <div className="about_sections">
        <div className="about_left">
          <img className="aziz" src={aziizpf} alt="" />
        </div>

        <div className="about_right">
          <div className="about_para">
            <p>
              The MERN stack combines MongoDB, Express.js, React.js, and Node.js
              to create a powerful and efficient framework for full-stack web
              development.
            </p>

          </div>
          <div className="about_skills">
            <div className="about_skill">
              <p>JavaScript</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about_skill">
              <p>React Js</p>
              <hr style={{ width: "100%" }} />
              </div>
              
            <div className="about_skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about_skill">
              <p>MongoDB</p>
              <hr style={{ width: "75%" }} />
            </div> <div className="about_skill">
              <p>Tailwind & Bootstrap</p>
              <hr style={{ width: "100%" }} />
            </div><div className="about_skill">
              <p>Next js</p>
              <hr style={{ width: "55%" }} />
            </div> <div className="about_skill">
              <p>Node js</p>
              <hr style={{ width: "95%" }} />
            </div> <div className="about_skill">
              <p>Express js</p>
              <hr style={{ width: "95%" }} />
            </div>
            <div className="about_skill">
              <p>TypeScript</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about_ashievemets">
        <div className="about_ashievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about_ashievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about_ashievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS </p>
        </div>
      </div>
    </div>
  );
};

export default About;
