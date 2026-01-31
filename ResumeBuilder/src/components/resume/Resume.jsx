import Education from "./education/EducationSection.jsx";
function Resume({ content }) {
  const sectionDirectory = {
    education: (section) => <Education section={section} content={content} />,
  };

  return (
    <div className="resume-wrapper">
      <div className="resume-page">
        {Object.keys(content).map((section) => {
          const lowerSection = section.toLowerCase();
          const sectionComponent = sectionDirectory[lowerSection];
          if (!sectionComponent) return null;

          return (
            <div className={`section ${section}`} key={section}>
              <div className="section-title">{section}</div>
              <div className="bar"></div>
              <div className="section-content">
                {sectionDirectory[lowerSection](section)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;
