import { useState } from "react";
import { forms } from "../../data/form-config.js";
import { formState } from "../../data/form-state.js";
import View from "../../Views/View.jsx";

const CUSTOM_GROUP_STATES = {
  skills: (id, fields) => ({
    id,
    category: "",
    skills: [{ id: crypto.randomUUID(), [fields[1].name]: "" }],
  }),
};

function Content({ view, manageView }) {
  const [formNumber, setFormNumber] = useState(0);
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
    const newFormData = { ...formData, [currentFormSection]: newGroupData };
    setFormData(newFormData);
  }

  function createGroup() {
    const factory = CUSTOM_GROUP_STATES[currentFormSection];
    if (factory) {
      return factory(crypto.randomUUID(), currentFormInputFields);
    }

    const newGroup = { id: crypto.randomUUID() };
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
    const newFormData = {
      ...formData,
      [currentFormSection]: updatedGroupData,
    };
    setFormData(newFormData);
  }

  function handleOnBlur(updatedGroup) {
    const updatedGroupData = currentFormData.map((group) => {
      return group.id === updatedGroup.id ? updatedGroup : group;
    });
    const newFormData = {
      ...formData,
      [currentFormSection]: updatedGroupData,
    };

    setFormData(newFormData);
  }

  function handleDeleteGroup(id) {
    const filteredGroups = currentFormData.filter((group) => group.id !== id);
    const newFormData = { ...formData, [currentFormSection]: filteredGroups };
    setFormData(newFormData);
  }
  /////////// END GROUP MANIPULATION FUNCTIONS ///////////

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

  const contentProps = {
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
    handleAddGroup,
    updateFormGroup,
    handleOnBlur,
    handleDeleteGroup,
  };
  // depending on screen width, either the mobile version of the page
  // content will load or the desktop version will
  return (
    <div className="page-content">
      <View
        view={view}
        manageView={manageView}
        currentFormConfig={currentFormConfig}
        contentProps={contentProps}
      />
    </div>
  );
}

export default Content;
