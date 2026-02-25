import { useState } from "react";
import { forms } from "../../data/form-config.js";
import { formState } from "../../data/form-state.js";
import Mobile from "../../Views/Mobile.jsx";

const CUSTOM_GROUP_STATES = {
  skills: (id, fields) => ({
    id,
    category: "",
    skills: [{ id: 0, [fields[1].name]: "" }],
  }),
};

function Content({ view, manageView }) {
  const [formNumber, setFormNumber] = useState(0);
  const [activeGroups, setActiveGroups] = useState({});
  const [formData, setFormData] = useState(formState);
  const currentFormConfig = forms[formNumber];
  const currentFormInputFields = currentFormConfig.inputFields;
  const currentFormSection = currentFormConfig.section;
  const currentFormData = formData[currentFormSection];
  const formIsReplicable = currentFormConfig.replicable;
  const totalForms = Object.keys(forms).length - 1;
  const isLastForm = formNumber === totalForms;
  const prog =
    formNumber === 0
      ? 1 / (totalForms + 1)
      : (formNumber + 1) / (totalForms + 1);
  const titleDataMap = {
    workExperience: (group) => ({
      title: group.jobTitle,
      subTitle: group.employer,
      titlePlaceholder: "Job Title",
      subTitlePlaceholder: "Employer",
    }),
    education: (group) => ({
      title: group.degree,
      subTitle: group.university,
      titlePlaceholder: "Degree",
      subTitlePlaceholder: "University",
    }),
    projects: (group) => ({
      title: group.projectTitle,
      titlePlaceholder: "Project",
    }),
  };

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
    const updatedGroupData = currentFormData.map((group) => {
      return group.id === updatedGroup.id ? updatedGroup : group;
    });

    setFormData({
      ...formData,
      [currentFormSection]: updatedGroupData,
    });
  }

  function handleDeleteGroup(id) {
    const filteredGroups = currentFormData.filter((group) => group.id !== id);
    setFormData({ ...formData, [currentFormSection]: filteredGroups });
  }
  /////////// END GROUP MANIPULATION FUNCTIONS ///////////

  /////////// START ACTIVE GROUP MANIPULATION FUNCTIONS ///////////
  function isGroupHidden(key) {
    return activeGroups[key] || false;
  }

  function toggleAccordion(key) {
    setActiveGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function handleDeleteFromActiveGroups(key) {
    if (key in activeGroups) {
      const newActiveGroups = { ...activeGroups };
      delete newActiveGroups[key];
      setActiveGroups(newActiveGroups);
    }
  }
  /////////// END ACTIVE GROUP MANIPULATION FUNCTIONS ///////////

  /////////// START PROGRESS MANIPULATION FUNCTIONS ///////////
  function incrementFormNumber() {
    if (formNumber >= totalForms) return;
    setFormNumber(formNumber + 1);
  }

  function decrementFormNumber() {
    if (formNumber <= 0) return;
    setFormNumber(formNumber - 1);
  }

  /////////// END PROGRESS MANIPULATION FUNCTIONS ///////////

  const mobileProps = {
    formData,
    formNumber,
    titleDataMap,
    currentFormData,
    formIsReplicable,
    currentFormConfig,
    currentFormSection,
    currentFormInputFields,
    isLastForm,
    prog,
    setFormNumber,
    incrementFormNumber,
    decrementFormNumber,
    isGroupHidden,
    handleAddGroup,
    updateFormGroup,
    toggleAccordion,
    handleDeleteGroup,
    handleDeleteFromActiveGroups,
  };
  // depending on screen width, either the mobile version of the page
  // content will load or the desktop version will
  return (
    <div className="page-content">
      <Mobile
        view={view}
        manageView={manageView}
        currentFormConfig={currentFormConfig}
        mobileProps={mobileProps}
      />
    </div>
  );
}

export default Content;
