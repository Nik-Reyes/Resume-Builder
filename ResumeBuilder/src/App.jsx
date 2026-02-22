import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Content from "./components/content/Content.jsx";

function App() {
  const [view, setView] = useState({ form: true, resume: false });

  function manageView(newView) {
    const updateView = { ...view };
    Object.keys(updateView).forEach((key) => (updateView[key] = false));
    updateView[newView] = true;
    setView(updateView);
  }

  return (
    <div className="page-wrapper">
      <Header view={view} manageView={manageView} />
      <Content view={view} manageView={manageView} />
    </div>
  );
}

export default App;
