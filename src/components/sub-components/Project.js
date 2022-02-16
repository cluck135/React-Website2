import { removeHyphensAndCapitalize } from "../utils/helpers";

function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="w-1/2 flex relative p-20" key={name}>
      <img className="w-fit relative "
        src={require(`../../assets/projects/${name}.jpg`)}
        alt={name}
      />
      <div className="absolute left-20 top-20 bg-cornflower opacity-90 hover:opacity-50 p-5">
        <h3 className="text-[50px] relative ">
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
