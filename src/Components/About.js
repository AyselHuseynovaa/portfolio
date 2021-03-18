import React from "react";

const About = () => {
  return (
    <div className="about container">
      <div className="about-title">
        <h1 className="title">About Me</h1>
      </div>
      <div className="row">
        <div className="left-col col-md-6  ">
          <div
            className="card shadow-lg p-3 mb-5 bg-body rounded"
            style={{ width: " 30rem", border: "none" }}
          >
            <div className="card-body">
              <h4 className="card-title">About Me</h4>
              <p className="card-text">
                I'm Aysel . I have experience in HTML5, CSS3, SCSS(SASS)
                Javascript, Bootstrap , React js,Redux. I'm studying at ASOIU.
                My specialty is Computer science. I am a 4rd year student. I am
                courteous and enthusiastic in IT and everything in its orbit. I
                enjoy programming and building websites
                <br />
                <b> Certificates</b>: Completion of English course (Intermadiate
                level), Certificate of completion Front-end Developer course.
                <br />
                <b>Languages</b>: English
                <br />
                <b> Interests</b>: Chess,Coding,Watching english movies.
                <br />
              </p>
              <a
                href="https://novoresume.com/editor/resume/19d58f10-768b-11eb-94bc-771af162bad9"
                class="btn"
                target="_blank"
              >
                Look at the CV
              </a>
            </div>
          </div>
        </div>

        <div className="right-col col-md-5  ">
        <div
            className="card shadow-lg p-3 mb-5 bg-body rounded"
            style={{ width: " 30rem", border: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default About;
