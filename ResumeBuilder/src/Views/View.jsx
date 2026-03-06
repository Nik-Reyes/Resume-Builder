// View exists as an intermdediary component to house the activeGroups state
// it houses the activeGroup states to reduce the amount of components that are re-rendered and the number of variables/functions are recreated
// if activeGroups exists on content then all of Content's variables and functions will be recreated

import Mobile from "./Mobile.jsx";
import Desktop from "./Desktop.jsx";
import { useState } from "react";

function View({ manageView, currentFormConfig, contentProps }) {
  const [activeGroups, setActiveGroups] = useState({});
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

  const sharedEntryProps = {
    currentFormInputFields: contentProps.currentFormInputFields,
    toggleAccordion: contentProps.toggleAccordion,
    isGroupHidden: contentProps.isGroupHidden,
    updateFormGroup: contentProps.updateFormGroup,
    handleDeleteFromActiveGroups: contentProps.handleDeleteFromActiveGroups,
    handleDeleteGroup: contentProps.handleDeleteGroup,
    formIsReplicable: contentProps.formIsReplicable,
    handleAddGroup: contentProps.handleAddGroup,
    handleOnBlur: contentProps.handleOnBlur,
    handleDeleteFromActiveGroups: handleDeleteFromActiveGroups,
    toggleAccordion: toggleAccordion,
    isGroupHidden: isGroupHidden,
  };

  const viewProps = {
    ...contentProps,
    handleDeleteFromActiveGroups: handleDeleteFromActiveGroups,
    toggleAccordion: toggleAccordion,
    isGroupHidden: isGroupHidden,
  };

  return (
    <div
      className={contentProps.isMobile ? "content mobile" : "content desktop"}
    >
      {contentProps.isMobile ? (
        <Mobile
          view={contentProps.view}
          manageView={manageView}
          currentFormConfig={currentFormConfig}
          viewProps={viewProps}
          sharedEntryProps={sharedEntryProps}
        />
      ) : (
        <Desktop
          currentFormConfig={currentFormConfig}
          viewProps={viewProps}
          sharedEntryProps={sharedEntryProps}
          view={contentProps.view}
        />
      )}
    </div>
  );
}

export default View;
