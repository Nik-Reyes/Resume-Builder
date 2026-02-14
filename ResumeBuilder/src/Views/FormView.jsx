import { useState } from "react";
import { forms } from "../data/form-config.js";
import { formState } from "../data/form-state.js";
import Form from "../components/form/Form.jsx";
import Resume from "../components/resume/Resume.jsx";
import InputGroup from "../components/form/InputGroup.jsx";
import SkillGroup from "../components/form/SkillGroup.jsx";

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

  function handleActiveGroupToggle(section, id) {
    const key = `${section}-${id}`;
    setActiveGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function handleInputChange(updatedGroup) {
    const section = [...currentFormData].map((group) => {
      return group.id === updatedGroup.id ? updatedGroup : group;
    });

    setFormData({ ...formData, [currentFormSection]: section });
  }

  const handleDeleteGroup = (id) => () => {
    if (!formIsReplicable) return;
    //filter out the input group using the id
    const filteredGroups = currentFormData.filter(
      (inputGroup) => inputGroup.id !== id
    );
    setFormData({ ...formData, [currentFormSection]: filteredGroups });

    //setActiveGroups is in parent
    // this function should only delete the inputgroup from data
    // it should not also contain the logic for how to get rid of the active prop
    // const key = `${currentFormSection}-${id}`;
    // if (key in activeGroups) {
    //   const newActiveGroups = { ...activeGroups };
    //   delete newActiveGroups[key];
    //   setActiveGroups(newActiveGroups);
    // }
  };

  return view.form ? (
    <Form
      title={currentFormConfig.displayTitle}
      formIsReplicable={formIsReplicable}
      addInputGroup={addInputGroup}
    >
      {currentFormConfig.customRender
        ? currentFormData.map((groupStateObj) => (
            <SkillGroup
              groupStateObj={groupStateObj}
              currentFormInputGroup={currentFormInputGroup}
              handleDeleteGroup={handleDeleteGroup}
              handleToggleGroup={handleActiveGroupToggle}
              handleInputChange={handleInputChange}
              hidden={
                activeGroups[`${currentFormSection}-${groupStateObj.id}`] ||
                false
              }
              key={`${currentFormSection}-input-group-${groupStateObj.id}`}
            />
          ))
        : currentFormData.map((groupStateObj) => {
            return (
              <InputGroup
                groupStateObj={groupStateObj}
                currentFormInputGroup={currentFormInputGroup}
                formIsReplicable={formIsReplicable}
                handleToggleGroup={handleActiveGroupToggle}
                currentFormSection={currentFormSection}
                handleInputChange={handleInputChange}
                handleDeleteGroup={handleDeleteGroup(groupStateObj.id)}
                hidden={
                  activeGroups[`${currentFormSection}-${groupStateObj.id}`] ||
                  false
                }
                key={`${currentFormSection}-input-group-${groupStateObj.id}`}
              />
            );
          })}
    </Form>
  ) : (
    <Resume formData={formData} />
  );
}

export default FormView;
