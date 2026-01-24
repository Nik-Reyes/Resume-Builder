import { useState } from "react";

function GroupHeading({ deleteGroup }) {
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
        <h4 className="group-title">Title</h4>
        <h5 className="group-title">subtitle Here</h5>
      </div>
      <div className="edit-group-btn-wrapper">
        <button
          onClick={deleteGroup}
          data-button-type="delete-group"
          className={menuClass}
          disabled={menuClass ? false : true}
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
      </div>
    </div>
  );
}

export default GroupHeading;
