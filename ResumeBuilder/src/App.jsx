import "./App.css";
import Form from "./components/form/Form.jsx";
import InputGroup from "./components/form/section/FormSection.jsx";
import ProgressFooter from "./components/progress-footer/ProgressFooter.jsx";
import { forms } from "./components/form/form-types.js";
import { useState } from "react";

const nextInputIds = {
  personalInformation: 1,
  education: 1,
  skills: 1,
  workExperience: 1,
};

function App() {
  const [formNumber, setFormNumber] = useState(0);
  const [formData, setFormData] = useState({
    personalInformation: [
      {
        id: 0,
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
        id: 0,
        degree: "",
        university: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [
      {
        id: 0,
        skill: "",
      },
    ],
    workExperience: [
      {
        id: 0,
        jobTitle: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ],
  });
  const currentForm = forms[formNumber];
  const inputConfig = currentForm.inputFields;
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
    const nextId = nextInputIds[currentForm.section]++;
    const newSection = { id: nextId };
    currentForm.inputFields.forEach((inputObj) => {
      newSection[inputObj.name] = "";
    });

    const formDataSection = [...formData[currentForm.section], newSection];
    setFormData({ ...formData, [currentForm.section]: formDataSection });
  }

  function handleInputChange(newtInput, id, inputName) {
    // copy and update the data, then call the setter function with updated data
    const formDataSection = [...formData[currentForm.section]];
    formDataSection[id][inputName] = newtInput;
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
            // To each n input groups belongs n inputs
            currentFormData.map((inputGroup) => {
              return (
                <InputGroup
                  groupStateObj={inputGroup}
                  inputConfig={inputConfig}
                  replicable={currentForm.replicable}
                  handleInputChange={handleInputChange}
                  key={inputGroup.id}
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
