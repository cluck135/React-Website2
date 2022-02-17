import { useState } from "react";
import Nav from "./components/Nav";
import Page from "./components/Page";

function App() {

  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div className="font-mono">
      <header>
        <Nav setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
    </div>
   
  );
}

export default App;
