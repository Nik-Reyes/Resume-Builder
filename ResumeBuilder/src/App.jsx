import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Content from "./components/content/Content.jsx";

function App() {
  const [view, setView] = useState({ form: true, resume: false });

  return (
    <div className="page-wrapper">
      <Header view={view} setView={setView} />
      <Content view={view} />
    </div>
  );
}

export default App;
