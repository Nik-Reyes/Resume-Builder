import "./App.css";
import { useState } from "react";
import { forms } from "./data/form-config.js";
import { formState } from "./data/form-state.js";
import Form from "./components/form/Form.jsx";
import Resume from "./components/resume/Resume.jsx";
import InputGroup from "./components/form/InputGroup.jsx";
import ViewHeader from "./components/view-header/Viewheader.jsx";
import ProgressFooter from "./components/progress-footer/ProgressFooter.jsx";

const nextInputIds = Object.fromEntries(
  Object.values(forms).map(({ section }) => [section, 1])
);

function App() {
  const [formNumber, setFormNumber] = useState(0);
  const [activeGroups, setActiveGroups] = useState({});
  const [view, setView] = useState({ form: true, resume: false });
  const [formData, setFormData] = useState(formState);

  // currentFormData is the array of object(s), where the objects contain the values of the inputs
  const currentFormConfig = forms[formNumber];
  const currentFormInputGroup = currentFormConfig.inputFields;
  const currentFormSection = currentFormConfig.section;
  const currentFormData = formData[currentFormSection];
  const formIsReplicable = currentFormConfig.replicable;

  function incrementFormNumber() {
    if (formNumber >= Object.entries(forms).length - 1) return;
    setFormNumber(formNumber + 1);
  }

  function decrementFormNumber() {
    if (formNumber <= 0) return;
    setFormNumber(formNumber - 1);
  }

  function addInputGroup() {
    if (!formIsReplicable) return;

    const nextId = nextInputIds[currentFormSection]++;
    const newDataObj = { id: nextId };
    currentFormInputGroup.forEach((inputObj) => {
      newDataObj[inputObj.name] = "";
    });

    const newFormData = [...currentFormData, newDataObj];
    setFormData({ ...formData, [currentFormSection]: newFormData });
  }

  const deleteInputGroup = (id) => () => {
    if (!formIsReplicable) return;
    //filter out the input group using the id
    const filteredGroups = currentFormData.filter(
      (inputGroup) => inputGroup.id !== id
    );
    setFormData({ ...formData, [currentFormSection]: filteredGroups });

    const key = `${currentFormSection}-${id}`;
    if (key in activeGroups) {
      const newActiveGroups = { ...activeGroups };
      delete newActiveGroups[key];
      setActiveGroups(newActiveGroups);
    }
  };

  function handleInputChange(updatedGroup) {
    // copy and update the all state data, then call the setter function with updated data
    const updatedFormData = [...currentFormData].map((group) => {
      return group.id === updatedGroup.id ? updatedGroup : group;
    });

    setFormData({ ...formData, [currentFormSection]: updatedFormData });
  }

  function handleActiveGroupToggle(section, id) {
    const key = `${section}-${id}`;
    setActiveGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function manageView(newView) {
    const updateView = { ...view };
    Object.keys(updateView).forEach((key) => (updateView[key] = false));
    updateView[newView] = true;
    setView(updateView);
  }

  return view.form ? (
    <div className="page-wrapper">
      <div className="page-content">
        <ViewHeader view={view} setView={manageView} />
        <Form
          title={currentFormConfig.displayTitle}
          replicable={formIsReplicable}
          addInputGroup={addInputGroup}
        >
          {
            // To each n input groups belongs n inputs
            currentFormData.map((inputGroup) => {
              return (
                <InputGroup
                  groupStateObj={inputGroup}
                  currentFormInputGroup={currentFormInputGroup}
                  replicable={formIsReplicable}
                  handleInputChange={handleInputChange}
                  handleDeleteGroup={deleteInputGroup(inputGroup.id)}
                  handleToggleGroup={handleActiveGroupToggle}
                  hidden={
                    activeGroups[`${currentFormSection}-${inputGroup.id}`] ||
                    false
                  }
                  formSection={currentFormSection}
                  key={`${currentFormSection}-input-group-${inputGroup.id}`}
                />
              );
            })
          }
        </Form>
        <ProgressFooter
          progress={formNumber}
          totalForms={Object.keys(currentFormConfig).length}
          advanceProgress={incrementFormNumber}
          regressProgress={decrementFormNumber}
        />
      </div>
    </div>
  ) : (
    <Resume formData={formData} />
  );
}

export default App;
