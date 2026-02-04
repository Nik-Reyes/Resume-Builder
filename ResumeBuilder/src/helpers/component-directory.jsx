import { formState } from "../data/form-state.js";
import Education from "../components/resume/education/EducationSection.jsx";

export const sectionDirectory = {
  education: (sectionName) => (
    <Education sectionName={sectionName} content={formState} />
  ),
};
