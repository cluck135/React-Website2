import { removeHyphensAndCapitalize } from "../utils/helpers";

function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="w-full relative border-4 border-dark rounded hover:shadow-xl hover:shadow-lavender ease-in-out duration-500 max-w-[500px] h-[300px] m-[30px]" key={name}>
      <img className="w-full h-full relative"
        src={require(`../../assets/projects/${name}.jpg`)}
        alt={name}
      />
      <div className="transition ease-in-out duration-500 absolute left-0 top-0 bottom-0 right-0 bg-cornflower opacity-20 hover:opacity-80  p-[50px]">
        <h3 className="text-[50px] relative ">
          <a href={link} className="hover:text-lavender ease-in-out duration-500 ">{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github hover:animate-pulse "></i>
          </a>
        </h3>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}

export default Project;
