import "./App.css";
import Form from "./components/form/Form.jsx";
import InputField from "./components/input/Input.jsx";
import ProgressFooter from "./components/progress-footer/ProgressFooter.jsx";
import { forms } from "./components/form/form-types.js";
import { useState } from "react";
import { Fragment } from "react";

function App() {
  const [formNumber, setFormNumber] = useState(0);
  const [formData, setFormData] = useState({
    personalInformation: [
      {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        location: "",
      },
    ],
    education: [
      {
        degree: "",
        university: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [
      {
        skill: "",
      },
    ],
    workExperience: [
      {
        jobTitle: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ],
  });
  const currentForm = forms[formNumber];

  function incrementFormNumber() {
    if (formNumber >= Object.entries(forms).length - 1) return;
    setFormNumber(formNumber + 1);
  }

  function decrementFormNumber() {
    if (formNumber <= 0) return;
    setFormNumber(formNumber - 1);
  }

  function handleInputChange(e, groupedDataIdx, input) {
    // copy and update the data, then call the setter function with updated data
    const formDataSection = [...formData[currentForm.section]];
    formDataSection[groupedDataIdx][input.name] = e.target.value;
    setFormData({ ...formData, [currentForm.section]: formDataSection });
  }

  function getFormInputs() {
    const inputFields = currentForm.inputFields;
    // currentFormData is the array of object(s), where the objects contain the values of the inputs
    const currentFormData = formData[currentForm.section];

    // for each input group data, render the proper input group components
    return currentFormData.map((inputGroup, groupedDataIdx) => {
      return (
        <Fragment key={groupedDataIdx}>
          {inputFields.map((input) => {
            return (
              <InputField
                key={input.name}
                title={input.title}
                inputType={input.type}
                inputValue={inputGroup[input.name]}
                updateFunction={(e) =>
                  handleInputChange(e, groupedDataIdx, input)
                }
              />
            );
          })}
        </Fragment>
      );
    });
  }

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <ProgressFooter />
        <Form
          title={currentForm.displayTitle}
          replicable={currentForm.replicable}
        >
          {getFormInputs()}
        </Form>
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
