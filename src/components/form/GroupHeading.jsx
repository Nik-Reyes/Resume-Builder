import { useState } from "react";
import Meatball from "../../assets/svg/meatball.svg?react";
import VChevron from "../../assets/svg/verticalChevron.svg?react";

function GroupHeading({
  titleData,
  deleteGroup,
  deleteActiveGroup,
  toggleAccordion,
  hidden,
  children,
}) {
  const [menuClass, setMenuClass] = useState("");
  // start with no class, no styles applied
  // only when the button is clicked should a class be set
  // This means that on first render, animation classes arent shown
  function toggleMenu() {
    setMenuClass((menuClass) => (menuClass === "open" ? "closed" : "open"));
  }

  return (
    <div className="group-header">
      <div className="group-title-wrapper">
        {children || (
          <>
            <span
              className={
                titleData.titlePlaceholder === "Skill" && titleData.title === ""
                  ? "group-title untitled"
                  : "group-title"
              }
            >
              {titleData.title === ""
                ? titleData.titlePlaceholder
                : titleData.title}
            </span>
            {"subTitle" in titleData && (
              <p className="group-subtitle">
                {titleData.subTitle === ""
                  ? titleData.subTitlePlaceholder
                  : titleData.subTitle}
              </p>
            )}
          </>
        )}
      </div>
      <div className="edit-group-btn-wrapper">
        <div className="header-buttons-wrapper">
          <button
            onClick={() => {
              deleteGroup();
              deleteActiveGroup();
            }}
            data-button-type="delete-group"
            className={menuClass}
            disabled={menuClass !== "open"}
          >
            <span>Delete</span>
          </button>
          <button data-button-type="edit-group" onClick={toggleMenu}>
            <Meatball />
          </button>
          <button
            data-button-type="accordion-control"
            onClick={toggleAccordion}
          >
            <VChevron className={hidden ? "hidden" : "visible"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupHeading;
