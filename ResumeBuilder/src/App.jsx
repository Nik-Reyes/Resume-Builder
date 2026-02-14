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
  const totalForms = Object.keys(forms).length - 1;

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <ViewHeader view={view} setView={setView} />
        <FormView view={view} currentFormConfig={currentFormConfig} />
        {view.form && (
          <ProgressFooter
            formNumber={formNumber}
            totalForms={totalForms}
            setFormNumber={setFormNumber}
          />
        )}
      </div>
    </div>
  );
}

export default App;
