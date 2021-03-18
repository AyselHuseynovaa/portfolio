import React from "react";
import Typed from "react-typed";
// import Particle from "react-particles-js";
const Home = () => {
  return (
    <div className=" home ">
      {/* <Particle
        params={{
          particles: {
            number:
            {  value: 30,
            density: {
              enable: true,
              value_area: 800,
            }},
          shape:{
type: "square",
stroke:{
  width:6,
  color:"#001233"
},
 
          }
        
          },
        }} */}
      {/* /> */}
      <div className="header-wraper">
        <div className="home-info">
          <h1 className="home-title">Guseinova Aisel</h1>
          <Typed
            className="typed-text"
            strings={["Front-end Developer", "Creator"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
