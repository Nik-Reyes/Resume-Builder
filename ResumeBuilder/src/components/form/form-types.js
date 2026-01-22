export const forms = {
  0: {
    replicable: false,
    section: "personalInformation",
    displayTitle: "Personal Information",
    inputFields: [
      { name: "firstName", title: "First Name", type: "text" },
      { name: "lastName", title: "Last Name", type: "text" },
      { name: "phone", title: "Phone Number", type: "tel" },
      { name: "email", title: "Email", type: "email" },
      { name: "linkedin", title: "LinkedIn URL", type: "url" },
      { name: "github", title: "GitHub URL", type: "url" },
      { name: "location", title: "City, State", type: "text" },
    ],
  },
  1: {
    replicable: true,
    section: "education",
    displayTitle: "Education",
    inputFields: [
      { name: "degree", title: "Degree", type: "text" },
      { name: "university", title: "University", type: "text" },
      { name: "startDate", title: "Start Date", type: "date" },
      { name: "endDate", title: "End Date", type: "date" },
    ],
  },
  2: {
    replicable: true,
    section: "skills",
    displayTitle: "Skills",
    inputFields: [{ name: "skill", title: "Skill", type: "text" }],
  },
  3: {
    replicable: true,
    section: "workExperience",
    displayTitle: "Work Experience",
    inputFields: [
      { name: "jobTitle", title: "Job Title", type: "text" },
      { name: "employer", title: "Employer", type: "text" },
      { name: "startDate", title: "Start Date", type: "date" },
      { name: "endDate", title: "End Date", type: "date" },
      { name: "location", title: "City, State", type: "text" },
    ],
  },
};
