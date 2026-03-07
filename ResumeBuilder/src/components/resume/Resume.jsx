import { sectionDirectory } from "../../helpers/component-directory.jsx";

function Resume({ formData }) {
  return (
    <div className="resume-wrapper">
      <div className="intermediate-wrapper">
        <div className="resume-page">
          {Object.keys(formData).map((sectionName) => {
            const sectionValues = formData[sectionName].flatMap((obj) =>
              Object.entries(obj)
                .filter(([key, value]) => {
                  return key !== "id" && typeof value === "string"; // filters out id and any other nested props (arr or obj) because if any section doesnt have a string to display, then dont render
                })
                .map(([, value]) => value)
            );
            const isEmptySection = sectionValues.every((val) => val === "");
            const SectionComponent = sectionDirectory[sectionName];
            if (!SectionComponent || isEmptySection) return null;
            const isPersonal = sectionName === "personalInformation";
            return (
              <div className={`section ${sectionName}`} key={sectionName}>
                {isPersonal ? (
                  <SectionComponent
                    sectionName={sectionName}
                    content={formData[sectionName]}
                  />
                ) : (
                  <>
                    <div className="section-title">
                      {sectionName === "workExperience"
                        ? "Work History"
                        : sectionName}
                    </div>
                    <div className="bar"></div>
                    <div className="section-content">
                      <SectionComponent
                        sectionName={sectionName}
                        content={formData[sectionName]}
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Resume;
