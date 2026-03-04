import { useMediaQuery } from "react-responsive";
import Mobile from "./Mobile.jsx";
import Desktop from "./Desktop.jsx";
import { useState } from "react";

function View({ view, manageView, currentFormConfig, mobileProps }) {
  const [activeGroups, setActiveGroups] = useState({});
  const isMobile = useMediaQuery({ maxWidth: 900 });
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
    currentFormInputFields: mobileProps.currentFormInputFields,
    toggleAccordion: mobileProps.toggleAccordion,
    isGroupHidden: mobileProps.isGroupHidden,
    updateFormGroup: mobileProps.updateFormGroup,
    handleDeleteFromActiveGroups: mobileProps.handleDeleteFromActiveGroups,
    handleDeleteGroup: mobileProps.handleDeleteGroup,
    formIsReplicable: mobileProps.formIsReplicable,
    handleAddGroup: mobileProps.handleAddGroup,
    handleOnBlur: mobileProps.handleOnBlur,
    handleDeleteFromActiveGroups: handleDeleteFromActiveGroups,
    toggleAccordion: toggleAccordion,
    isGroupHidden: isGroupHidden,
  };

  const viewProps = {
    ...mobileProps,
    handleDeleteFromActiveGroups: handleDeleteFromActiveGroups,
    toggleAccordion: toggleAccordion,
    isGroupHidden: isGroupHidden,
  };

  return (
    <div className={isMobile ? "content mobile" : "content desktop"}>
      {isMobile ? (
        <Mobile
          view={view}
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
        />
      )}
    </div>
  );
}

export default View;
