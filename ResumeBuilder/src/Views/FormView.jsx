import { useState } from "react";
import { forms } from "../data/form-config.js";
import { formState } from "../data/form-state.js";
import Form from "../components/form/Form.jsx";
import Resume from "../components/resume/Resume.jsx";
import InputGroup from "../components/form/InputGroup.jsx";

const nextInputIds = Object.fromEntries(
  Object.values(forms).map(({ section }) => [section, 1])
);

function FormView({ view, currentFormConfig }) {
  const [activeGroups, setActiveGroups] = useState({});
  const [formData, setFormData] = useState(formState);
  const currentFormInputGroup = currentFormConfig.inputFields;
  const currentFormSection = currentFormConfig.section;
  const currentFormData = formData[currentFormSection];
  const formIsReplicable = currentFormConfig.replicable;

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

  return view.form ? (
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
                activeGroups[`${currentFormSection}-${inputGroup.id}`] || false
              }
              formSection={currentFormSection}
              key={`${currentFormSection}-input-group-${inputGroup.id}`}
            />
          );
        })
      }
    </Form>
  ) : (
    <Resume formData={formData} />
  );
}

export default FormView;
