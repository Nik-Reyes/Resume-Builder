import { sectionDirectory } from "../../helpers/component-directory.jsx";

function Resume({ formData }) {
  return (
    <div className="resume-wrapper">
      <div className="resume-page">
        {Object.keys(formData).map((sectionName) => {
          const sectionValues = formData[sectionName]
            .flatMap((obj) => Object.values(obj))
            .filter((item) => typeof item !== "number");
          const isEmptySection = sectionValues.every((val) => val === "");
          const sectionComponent = sectionDirectory(sectionName, formData);
          if (!sectionComponent || isEmptySection) return null;

          return (
            <div className={`section ${sectionName}`} key={sectionName}>
              {sectionName.includes("personal") ? (
                sectionComponent
              ) : (
                <>
                  <div className="section-title">{sectionName}</div>
                  <div className="bar"></div>
                  <div className="section-content">{sectionComponent}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;
