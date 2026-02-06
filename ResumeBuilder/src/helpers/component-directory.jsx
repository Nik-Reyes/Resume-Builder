import Education from "../components/resume/education/EducationSection.jsx";
import Personal from "../components/resume/personal/PersonalSection.jsx";

export const sectionDirectory = (sectionName, formData) => {
  const components = {
    education: <Education sectionName={sectionName} content={formData} />,
    personalInformation: (
      <Personal sectionName={sectionName} content={formData} />
    ),
  };
  return components[sectionName];
};
