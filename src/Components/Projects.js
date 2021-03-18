import React from "react";
import {data_projects} from "./data/Project_data";
import Portfolio from "./Portfolio";
const Projects = () => {
 
  return (
    <div className="container portfolio">
 <div className="portfolio-title">
        <h1 className="title">Portfolio</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data_projects.map((project) => {
         return <Portfolio key={project.name} project={project} />

        })}
      </div>
    </div>
  );
};
export default Projects;
