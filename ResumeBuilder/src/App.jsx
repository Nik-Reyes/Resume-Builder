import "./App.css";
import Form from "./components/form/Form.jsx";
import InputField from "./components/input/Input.jsx";
import ProgressFooter from "./components/progress-footer/ProgressFooter.jsx";
import { forms } from "./components/form/form-types.js";
import { useState } from "react";

function App() {
  const [formNumber, setFormNumber] = useState(0);

  function incrementFormNumber() {
    if (formNumber >= Object.entries(forms).length - 1) return;
    setFormNumber(formNumber + 1);
  }

  function decrementFormNumber() {
    if (formNumber <= 0) return;
    setFormNumber(formNumber - 1);
  }

  function getForm(formNumber) {
    return forms[formNumber].map((inputMetadata) => (
      <InputField
        key={inputMetadata.title}
        title={inputMetadata.title}
        inputType={inputMetadata.type}
      />
    ));
  }

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Form formTitle={"Personal Details"}>{getForm(formNumber)}</Form>
        <ProgressFooter
          progress={formNumber}
          advanceProgress={incrementFormNumber}
          regressProgress={decrementFormNumber}
        />
      </div>
    </div>
  );
}

export default App;
