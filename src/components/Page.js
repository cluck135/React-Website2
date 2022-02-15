import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";


function Page({ currentPage }) {

  const insertedPage = () => {
  switch (currentPage) {
    case "Resume": return <Resume />
    case "Portfolio": return <Portfolio />
    default: return <About />
  }}

  return (
    <div>{insertedPage()}</div>
  )
}

export default Page;