import { useState } from "react"
import Project from "./sub-components/Project";

function Portfolio(props) {

  const [projects] = useState([
    {
      name: 'tech-blog',
      description: 'Node/Express/Sequelize',
      link: "https://tech-blog-mvc-casen.herokuapp.com/",
      repo: "https://github.com/cluck135/Tech-Blog"
    },
    {
      name: 'booya-social-media',
      description: 'MVC/Express/Sequelize/Node/APIs',
      link: "https://booya-unh-coding-bootcamp.herokuapp.com/",
      repo: "https://github.com/tallen1985/UNH-Project-2"
    },
    {
      name: 'note-taker',
      description: 'Express/Node',
      link: "https://tranquil-woodland-59466.herokuapp.com/",
      repo: "https://github.com/cluck135/Express.js-Note-Taker"
    },
    {
      name: 'weather-dashboard',
      description: 'API/Node/CSS/HTML',
      link: "https://cluck135.github.io/Weather-Dashboard/",
      repo: "https://github.com/cluck135/Weather-Dashboard"
    },
    {
      name: 'dog-adoption',
      description: 'Node/APIs/CSS',
      link: "https://cluck135.github.io/Dog-Adoption-Site/",
      repo: "hhttps://github.com/cluck135/Dog-Adoption-Site"
    },
    {
      name: 'work-day-scheduler',
      description: 'Node',
      link: "https://cluck135.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/cluck135/Work-Day-Scheduler"
    },
  ])

  return (
    <div className="flex flex-wrap bg-oxford text-dark">
      {projects.map((project, idx) => (
        <Project
          project={project}
          key={"project" + idx}
        />
      ))}
    </div>
  )
}

export default Portfolio;