import { useState } from "react";
import Nav from "./components/Nav";
import Page from "./components/Page";

function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div className="App" className="bg-">
      <header className="App-header">
        <Nav setCurrentPage={setCurrentPage}/>
      </header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
    </div>
   
  );
}

export default App;
