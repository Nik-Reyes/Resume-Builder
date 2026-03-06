import "./App.css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./components/Header/Header.jsx";
import Content from "./components/content/Content.jsx";
import Button from "./components/button/Button.jsx";

function App() {
  const [view, setView] = useState({
    form: true,
    resume: false,
    customize: false,
  });
  const isMobile = useMediaQuery({ maxWidth: 900 });

  function manageView(newView) {
    const updateView = { ...view };
    Object.keys(updateView).forEach((key) => (updateView[key] = false));
    updateView[newView] = true;
    setView(updateView);
  }

  useEffect(() => {
    if (!isMobile && view.resume) {
      manageView("customize");
    }
  }, [isMobile]);

  return (
    <div className="page-wrapper">
      <Header>
        <Button
          className={
            view.form
              ? "form-view sharp-white"
              : "form-view sharp-white inactive"
          }
          onClick={() => manageView("form")}
        >
          <span>Edit Form</span>
        </Button>
        {isMobile ? (
          <Button
            className={
              view.form
                ? "resume-view sharp-white inactive"
                : "resume-view sharp-white"
            }
            onClick={() => manageView("resume")}
          >
            <span>Preview Resume</span>
          </Button>
        ) : (
          <Button
            className={
              view.form
                ? "resume-view sharp-white inactive"
                : "resume-view sharp-white"
            }
            onClick={() => manageView("customize")}
          >
            <span>Customize</span>
          </Button>
        )}
      </Header>
      <Content view={view} manageView={manageView} isMobile={isMobile} />
    </div>
  );
}

export default App;
