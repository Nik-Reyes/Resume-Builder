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
  const currentFormInputFields = currentFormConfig.inputFields;
  const currentFormSection = currentFormConfig.section;
  const currentFormData = formData[currentFormSection];
  const formIsReplicable = currentFormConfig.replicable;

  function addInputGroup() {
    if (!formIsReplicable) return;

    const nextId = nextInputIds[currentFormSection]++;
    const newDataObj = { id: nextId };

    //use the config to generate a new state object
    currentFormInputFields.forEach((inputObj) => {
      newDataObj[inputObj.name] = "";
    });

    const newFormData = [...currentFormData, newDataObj];
    setFormData({ ...formData, [currentFormSection]: newFormData });
  }

  function handleActiveGroupToggle(key) {
    setActiveGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function isGroupHidden(key) {
    return activeGroups[key] || false;
  }

  function handleInputChange(updatedGroup) {
    const section = [...currentFormData].map((group) => {
      return group.id === updatedGroup.id ? updatedGroup : group;
    });

    setFormData({ ...formData, [currentFormSection]: section });
  }

  const handleDeleteGroup = (id) => () => {
    if (!formIsReplicable) return;
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

  return view.form ? (
    <Form
      title={currentFormConfig.displayTitle}
      formIsReplicable={formIsReplicable}
      addInputGroup={addInputGroup}
    >
      {currentFormData.map((groupStateObj) => {
        const key = `${currentFormSection}-input-group-${groupStateObj.id}`;
        const isHidden =
          activeGroups[`${currentFormSection}-${groupStateObj.id}`] || false;
        return currentFormConfig.customRender ? (
          <SkillGroup
            groupStateObj={groupStateObj}
            currentFormInputFields={currentFormInputFields}
            handleDeleteGroup={handleDeleteGroup}
            handleToggleGroup={handleActiveGroupToggle}
            isGroupHidden={isGroupHidden}
            handleInputChange={handleInputChange}
            isCategoryHidden={isHidden}
            currentFormSection={currentFormSection}
            key={key}
          />
        ) : (
          <InputGroup
            groupStateObj={groupStateObj}
            currentFormInputFields={currentFormInputFields}
            formIsReplicable={formIsReplicable}
            handleToggleGroup={handleActiveGroupToggle}
            currentFormSection={currentFormSection}
            handleInputChange={handleInputChange}
            handleDeleteGroup={handleDeleteGroup(groupStateObj.id)}
            hidden={isHidden}
            key={key}
          />
        );
      })}
    </Form>
  ) : (
    <Resume formData={formData} />
  );
}

export default FormView;
