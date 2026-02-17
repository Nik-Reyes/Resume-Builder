import { useState } from "react";
import { forms } from "../data/form-config.js";
import { formState } from "../data/form-state.js";
import Form from "../components/form/Form.jsx";
import Resume from "../components/resume/Resume.jsx";
import InputGroup from "../components/form/InputGroup.jsx";
import SkillGroup from "../components/form/SkillGroup.jsx";

const CUSTOM_GROUP_STATES = {
  skills: (id, fields) => ({
    id,
    category: "",
    skills: [{ id: 0, [fields[1].name]: "" }],
  }),
};

function FormView({ view, currentFormConfig }) {
  const [activeGroups, setActiveGroups] = useState({});
  const [formData, setFormData] = useState(formState);
  const currentFormInputFields = currentFormConfig.inputFields;
  const currentFormSection = currentFormConfig.section;
  const currentFormData = formData[currentFormSection];
  const formIsReplicable = currentFormConfig.replicable;

  /////////// START GROUP MANIPULATION FUNCTIONS ///////////
  function addFormGroup(newGroup) {
    if (!formIsReplicable) return;

    const newGroupData = [...currentFormData, newGroup];
    setFormData({ ...formData, [currentFormSection]: newGroupData });
  }

  function createGroup() {
    const nextId =
      currentFormData.length > 0
        ? Math.max(...currentFormData.map((group) => group.id)) + 1
        : 0;

    const factory = CUSTOM_GROUP_STATES[currentFormSection];
    if (factory) {
      return factory(nextId, currentFormInputFields);
    }

    const newGroup = { id: nextId };
    currentFormInputFields.forEach((field) => {
      newGroup[field.name] = "";
    });

    return newGroup;
  }

  function handleAddGroup() {
    const newGroup = createGroup();
    addFormGroup(newGroup);
  }

  function updateFormGroup(updatedGroup) {
    // injects the updated group from a child group into updatedGroupData
    // and then updates the currentFormSection with this new data
    const updatedGroupData = [...currentFormData].map((group) => {
      return group.id === updatedGroup.id ? updatedGroup : group;
    });

    setFormData({
      ...formData,
      [currentFormSection]: updatedGroupData,
    });
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
  /////////// END GROUP MANIPULATION FUNCTIONS ///////////

  /////////// START ACTIVE GROUP MANIPULATION FUNCTIONS ///////////
  function isGroupHidden(key) {
    return activeGroups[key] || false;
  }

  function handleToggleGroup(key) {
    setActiveGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }
  /////////// END ACTIVE GROUP MANIPULATION FUNCTIONS ///////////

  const staticSharedProps = {
    currentFormInputFields,
    handleToggleGroup,
    isGroupHidden,
    updateFormGroup,
    currentFormSection,
  };

  return view.form ? (
    <Form
      title={currentFormConfig.displayTitle}
      formIsReplicable={formIsReplicable}
      addFormGroup={handleAddGroup}
    >
      {currentFormData.map((groupStateObj) => {
        const key = `${currentFormSection}-${groupStateObj.id}`;
        const dynamicSharedProps = {
          groupStateObj,
          handleDeleteGroup: handleDeleteGroup(groupStateObj.id),
        };
        return currentFormConfig.customRender ? (
          <SkillGroup
            {...staticSharedProps}
            {...dynamicSharedProps}
            key={key}
          />
        ) : (
          <InputGroup
            {...staticSharedProps}
            {...dynamicSharedProps}
            formIsReplicable={formIsReplicable}
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
