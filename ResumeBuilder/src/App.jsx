import "./App.css";
import Form from "./components/form/Form.jsx";
import FormSection from "./components/form/section/FormSection.jsx";
import ProgressFooter from "./components/progress-footer/ProgressFooter.jsx";
import { forms } from "./components/form/form-types.js";
import { useState } from "react";

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
  const inputFields = currentForm.inputFields;
  // currentFormData is the array of object(s), where the objects contain the values of the inputs
  const currentFormData = formData[currentForm.section];

  function incrementFormNumber() {
    if (formNumber >= Object.entries(forms).length - 1) return;
    setFormNumber(formNumber + 1);
  }

  function decrementFormNumber() {
    if (formNumber <= 0) return;
    setFormNumber(formNumber - 1);
  }

  function addFormSubsection() {
    if (!currentForm.replicable) return;
    //loop over the current subsection, copy over the string value of the props to new obj
    const newSection = {};
    currentForm.inputFields.forEach((inputObj) => {
      newSection[inputObj.name] = "";
    });

    const formDataSection = [...formData[currentForm.section], newSection];
    setFormData({ ...formData, [currentForm.section]: formDataSection });
  }

  function handleInputChange(e, groupedDataIdx, inputName) {
    // copy and update the data, then call the setter function with updated data
    const formDataSection = [...formData[currentForm.section]];
    formDataSection[groupedDataIdx][inputName] = e.target.value;
    setFormData({ ...formData, [currentForm.section]: formDataSection });
  }

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <ProgressFooter />
        <Form
          title={currentForm.displayTitle}
          replicable={currentForm.replicable}
          addSubSection={addFormSubsection}
        >
          {
            // for each input group data, render the proper input group components
            currentFormData.map((inputGroup, groupedDataIdx) => {
              return (
                <FormSection
                  replicable={currentForm.replicable}
                  groupedDataIdx={groupedDataIdx}
                  inputGroup={inputGroup}
                  inputFields={inputFields}
                  handleInputChange={handleInputChange}
                  key={groupedDataIdx}
                />
              );
            })
          }
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
