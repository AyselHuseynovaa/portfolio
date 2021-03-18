import React from "react";
const Skills = () => {
  return (
    <div className="skills container">
      <div className="skills-title">
        <h1 className="title">My Skills</h1>
      </div>
      <div className=" skills-row row">
        <div className="skills-left-col col-md-6  col-sm-4">
          <div
            className="card shadow-lg p-3 mb-5 bg-body rounded"
            style={{ width: " 30rem", border: "none" }}
          >
            <div className="card-body">
              <h4 className="card-title">My Creative Skills</h4>
              <p className="card-text">
                I've always loved being a front-end developer. To be happy, one has to
                do what she loves. I am very happy for that. Because I learned
                everything I knew fondly and never regretted it. I will always
                continue to learn.I have prepared many sites so far. I am able
                to code all the designs that can be of any desired difficulty.
                Customers have always been satisfied with my work. Because I've
                always tried to do my best.
              </p>
            </div>
          </div>
        </div>

        <div className="skills-right-col col-md-5  ">
        <div
            className="card shadow-lg p-3 mb-5 bg-body rounded"
            style={{ width: " 30rem", border: "none" }}
          >  <div className="bars">
            <div className="info">
              <span>HTML5</span>
              <span>98%</span>
            </div>
            <div className="line html"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>CSS</span>
              <span>98%</span>
            </div>
            <div className="line css"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>SCSS(SASS)</span>
              <span>95%</span>
            </div>
            <div className="line sass"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>Bootstrap</span>
              <span>95%</span>
            </div>
            <div className="line bootstrap"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>JavaScript</span>
              <span>85%</span>
            </div>
            <div className="line js"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>React.js</span>
              <span>85%</span>
            </div>
            <div className="line react"></div>
          </div>
          <div className="bars"><div className="info">
              <span>Redux</span>
              <span>80%</span>
            </div>
            <div className="line redux"></div>
            </div>
        
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
