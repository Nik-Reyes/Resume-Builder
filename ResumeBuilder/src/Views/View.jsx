import { useMediaQuery } from "react-responsive";
import Mobile from "./Mobile.jsx";
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

  return isMobile ? (
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
  ) : (
    "cool"
  );
}

export default View;
