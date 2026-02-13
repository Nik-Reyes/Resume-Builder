import "./App.css";
import { useState } from "react";
import { forms } from "./data/form-config.js";
import ViewHeader from "./components/view-header/Viewheader.jsx";
import ProgressFooter from "./components/progress-footer/ProgressFooter.jsx";
import FormView from "./Views/FormView.jsx";

function App() {
  const [formNumber, setFormNumber] = useState(0);
  const [view, setView] = useState({ form: true, resume: false });
  const currentFormConfig = forms[formNumber];

  // ProgressFooter Handlers
  function incrementFormNumber() {
    if (formNumber >= Object.entries(forms).length - 1) return;
    setFormNumber(formNumber + 1);
  }

  function decrementFormNumber() {
    if (formNumber <= 0) return;
    setFormNumber(formNumber - 1);
  }

  // ViewHeader handlers
  function manageView(newView) {
    const updateView = { ...view };
    Object.keys(updateView).forEach((key) => (updateView[key] = false));
    updateView[newView] = true;
    setView(updateView);
  }

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <ViewHeader view={view} setView={manageView} />
        <FormView view={view} currentFormConfig={currentFormConfig} />
        <ProgressFooter
          progress={formNumber}
          totalForms={Object.keys(currentFormConfig).length}
          advanceProgress={incrementFormNumber}
          regressProgress={decrementFormNumber}
        />
      </div>
    </div>
  );
}

export default App;
