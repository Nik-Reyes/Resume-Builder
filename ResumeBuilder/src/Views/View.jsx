import Mobile from "./Mobile.jsx";
import { useState } from "react";

function View({ view, manageView, currentFormConfig, mobileProps }) {
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

  return (
    <Mobile
      view={view}
      manageView={manageView}
      currentFormConfig={currentFormConfig}
      mobileProps={{
        ...mobileProps,
        handleDeleteFromActiveGroups,
        toggleAccordion,
        isGroupHidden,
      }}
    ></Mobile>
  );
}

export default View;
