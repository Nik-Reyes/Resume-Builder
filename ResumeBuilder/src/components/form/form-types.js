export const forms = {
  0: {
    replicable: false,
    section: "Personal Information",
    inputFields: [
      { title: "First Name", type: "text" },
      { title: "Last Name", type: "text" },
      { title: "Phone Number", type: "tel" },
      { title: "Email", type: "email" },
      { title: "LinkedIn URL", type: "url" },
      { title: "GitHub URL", type: "url" },
      { title: "City, State", type: "text" },
    ],
  },
  1: {
    replicable: true,
    section: "Education",
    inputFields: [
      { title: "Degree", type: "text" },
      { title: "University", type: "text" },
      { title: "Start Date", type: "date" },
      { title: "End Date", type: "date" },
    ],
  },
  2: {
    replicable: true,
    section: "Skills",
    inputFields: [{ title: "Skill", type: "text" }],
  },
  3: {
    replicable: true,
    section: "Work Experience",
    inputFields: [
      { title: "Job Title", type: "text" },
      { title: "Employer", type: "text" },
      { title: "Start Date", type: "date" },
      { title: "End Date", type: "date" },
      { title: "City, State", type: "text" },
    ],
  },
};
