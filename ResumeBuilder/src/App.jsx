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

  const currentView = {
    ...view,
    // mobile: previews only the resume
    resume: isMobile && view.resume,
    // desktop: renders the customize whether the user clicks 'customize' while on 'edit form' or if user was already in 'preview resume' when on mobile
    customize: !isMobile && (view.customize || view.resume),
  };

  return (
    <div className="page-wrapper">
      <Header>
        <Button
          className={
            currentView.form
              ? "form-view sharp-white"
              : "form-view sharp-white inactive"
          }
          onClick={() => manageView("form")}
        >
          <span>Edit Form</span>
        </Button>
        <Button
          className={
            currentView.form
              ? "resume-view sharp-white inactive"
              : "resume-view sharp-white"
          }
          onClick={() =>
            isMobile ? manageView("resume") : manageView("customize")
          }
        >
          <span>{isMobile ? " Preview Resume" : "Customize"}</span>
        </Button>
      </Header>
      <Content view={currentView} manageView={manageView} isMobile={isMobile} />
    </div>
  );
}

export default App;
