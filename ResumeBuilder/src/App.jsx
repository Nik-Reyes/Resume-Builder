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
        description: "",
      },
    ],
  });
  // currentFormData is the array of object(s), where the objects contain the values of the inputs
  const currentFormConfig = forms[formNumber];
  const currentFormInputGroup = currentFormConfig.inputFields;
  const currentFormSection = currentFormConfig.section;
  const currentFormData = formData[currentFormConfig.section];

  function incrementFormNumber() {
    if (formNumber >= Object.entries(forms).length - 1) return;
    setFormNumber(formNumber + 1);
  }

  function decrementFormNumber() {
    if (formNumber <= 0) return;
    setFormNumber(formNumber - 1);
  }

  function addInputGroup() {
    if (!currentFormConfig.replicable) return;
    //loop over the current subsection, copy over the string value of the props to new obj
    const nextId = nextInputIds[currentFormConfig.section]++;
    const newSection = { id: nextId };
    currentFormConfig.inputFields.forEach((inputObj) => {
      newSection[inputObj.name] = "";
    });

    const formDataSection = [
      ...formData[currentFormConfig.section],
      newSection,
    ];
    setFormData({ ...formData, [currentFormConfig.section]: formDataSection });
  }

  const deleteInputGroup = (id) => () => {
    if (!currentFormConfig.replicable) return;
    //filter out the input group using the id
    const filteredGroups = currentFormData.filter(
      (inputGroup) => inputGroup.id !== id
    );
    setFormData({ ...formData, [currentFormConfig.section]: filteredGroups });
  };

  function handleInputChange(updatedGroup) {
    // copy and update the data, then call the setter function with updated data
    const updatedFormData = [...formData[currentFormConfig.section]].map(
      (group) => {
        return group.id === updatedGroup.id ? updatedGroup : group;
      }
    );

    setFormData({ ...formData, [currentFormConfig.section]: updatedFormData });
  }

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <ProgressFooter />
        <Form
          title={currentFormConfig.displayTitle}
          replicable={currentFormConfig.replicable}
          addInputGroup={addInputGroup}
        >
          {
            // To each n input groups belongs n inputs
            currentFormData.map((inputGroup) => {
              return (
                <InputGroup
                  groupStateObj={inputGroup}
                  currentFormInputGroup={currentFormInputGroup}
                  replicable={currentFormConfig.replicable}
                  handleInputChange={handleInputChange}
                  handleDeleteGroup={deleteInputGroup(inputGroup.id)}
                  formSection={currentFormSection}
                  key={"input-group-" + inputGroup.id}
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
