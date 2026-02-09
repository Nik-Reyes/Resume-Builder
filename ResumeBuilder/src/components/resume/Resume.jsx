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
          const SectionComponent = sectionDirectory[sectionName];
          if (!SectionComponent || isEmptySection) return null;

          const isPersonal = sectionName === "personalInformation";

          return (
            <div className={`section ${sectionName}`} key={sectionName}>
              {isPersonal ? (
                <SectionComponent
                  sectionName={sectionName}
                  content={formData}
                />
              ) : (
                <>
                  <div className="section-title">{sectionName}</div>
                  <div className="bar"></div>
                  <div className="section-content">
                    <SectionComponent
                      sectionName={sectionName}
                      content={formData}
                    />
                  </div>
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
