import { formState } from "../../data/form-state.js";
import sectionDirectory from "../../helpers/component-directory.jsx";

function Resume() {
  return (
    <div className="resume-wrapper">
      <div className="resume-page">
        {Object.keys(formState).map((sectionName) => {
          const lowercaseSection = sectionName.toLowerCase();
          const sectionComponent = sectionDirectory[lowercaseSection];
          if (!sectionComponent) return null;

          return (
            <div className={`section ${sectionName}`} key={sectionName}>
              <div className="section-title">{sectionName}</div>
              <div className="bar"></div>
              <div className="section-content">
                {sectionDirectory[lowercaseSection](sectionName)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;
