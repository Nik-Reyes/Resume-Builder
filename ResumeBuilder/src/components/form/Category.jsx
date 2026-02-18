import { useState } from "react";
import Edit from "../../assets/svg/edit-button-svgrepo-com.svg?react";
import Save from "../../assets/svg/check-square-svgrepo-com.svg?react";

function Category({ placeholder, onChange, value }) {
  const [isEditing, setIsEditing] = useState(false);
  console.log("render");

  let category = null;
  isEditing
    ? (category = (
        <>
          <div className="catInput-wrapper">
            <input
              className="catInput"
              placeholder={placeholder} //plcaeholder
              onChange={onChange}
              value={value}
            />
          </div>
          <button
            onClick={() => setIsEditing(false)}
            data-button-type="edit-category"
          >
            <Save width={24} height={24} />
          </button>
        </>
      ))
    : (category = (
        <>
          <div className="catVal-wrapper">
            <span>{value || "Category"}</span>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            data-button-type="edit-category"
          >
            <Edit width={24} height={24} />
          </button>
        </>
      ));

  return <div className="category-title">{category}</div>;
}

export default Category;
