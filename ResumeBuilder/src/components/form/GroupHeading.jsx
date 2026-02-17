import { useState } from "react";

function GroupHeading({
  titleData,
  deleteGroup,
  deleteActiveGroup,
  toggleAccordian,
  hidden,
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
      <header className="group-title-wrapper">
        <h1 className="group-title">
          {titleData.title === ""
            ? titleData.titlePlaceholder
            : titleData.title}
        </h1>
        {"subTitle" in titleData && (
          <p className="group-subtitle">
            {titleData.subTitle === ""
              ? titleData.subTitlePlaceholder
              : titleData.subTitle}
          </p>
        )}
      </header>
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
            Delete
          </button>
          <button data-button-type="edit-group" onClick={toggleMenu}>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
          <button
            data-button-type="accordian-control"
            onClick={toggleAccordian}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={hidden ? "hidden" : "visible"}
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupHeading;
