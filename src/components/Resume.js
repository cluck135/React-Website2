

function Resume(props) {

  const frontEndProficiencies = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Javascript",
    "Responsive Design",
    "React"
  ];
  const backEndProficiencies = [
    "APIs",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "REST",
    "GraphQL",
    "Solidity"
  ]

  return (
    <section className="bg-oxford text-white pt-10 pl-10 pb-10">
      <div className="2">
        <h1 className="text-5xl bg-cornflower w-fit p-5 rounded-xl shadow-white shadow-lg ">
          Resume
        </h1>
        <a href="https://www.linkedin.com/in/casen-luck-747788113/overlay/1635482648494/single-media-viewer/">
        <button className=
        "text-xl m-6 p-2 bg-cornflower w-fit h-fit rounded-xl shadow-md shadow-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lavender duration-300 hover:shadow-xl">
          View my resume
        </button>
        </a>
        
        <h3 className="text-3xl pt-2">Front-end Proficiencies</h3>
        <ul className="text-lg list-disc list-inside pl-4">
          {frontEndProficiencies.map((proficiency) => <li>{proficiency}</li> )}   
        </ul>
        <h3 className="text-3xl pt-2">Back-end Proficiencies</h3>
        <ul className="text-lg list-disc list-inside pl-4">
          {backEndProficiencies.map((proficiency) => <li>{proficiency}</li> )}   
        </ul>
      </div>
    </section>
  )
}

export default Resume;