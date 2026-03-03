import { useState, useRef, useEffect } from "react";
import Edit from "../../assets/svg/edit-button-svgrepo-com.svg?react";
import Save from "../../assets/svg/check-square-svgrepo-com.svg?react";

function Category({ placeholder, onChange, value }) {
  const [isEditing, setIsEditing] = useState(false);
  const input = useRef(null);

  console.log(input);

  useEffect(() => {
    if (isEditing) {
      input.current.focus();
    }
  }, [isEditing]);

  let category = null;
  isEditing
    ? (category = (
        <>
          <div className="catInput-wrapper">
            <input
              ref={input}
              className="catInput br-tlr"
              placeholder={placeholder}
              onChange={onChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setIsEditing(false);
                }
              }}
              value={value}
              tabIndex={1}
            />
          </div>
          <button
            onClick={() => setIsEditing(false)}
            data-button-type="edit-category"
          >
            <Save width={24} height={24} className="category-save-icon frost" />
          </button>
        </>
      ))
    : (category = (
        <>
          <div className="catVal-wrapper">
            <span
              className={`${
                value === ""
                  ? "category-display-title untitled"
                  : "category-display-title"
              }`}
            >
              {value || "Unititled"}
            </span>
          </div>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
            data-button-type="edit-category"
          >
            <Edit width={20} height={20} className="category-edit-icon frost" />
          </button>
        </>
      ));

  return <div className="category-title">{category}</div>;
}

export default Category;
