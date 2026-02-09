import { Fragment } from "react";

function Personal({ sectionName, content }) {
  return content[sectionName].map((personal, i) => {
    const sectionTitle = personal.firstName + " " + personal.lastName;
    const linkedinHyperlink = personal.linkedin;
    const githubHyperlink = personal.github;

    return (
      <Fragment key={`${sectionName}-${i}`}>
        <div className="section-title">{sectionTitle}</div>
        <div className="datalayer">
          <span className="phone">{personal.phone}</span>
          <span className="location">{personal.location}</span>
          <span className="email">{personal.email}</span>
          <a
            className="linkedin-link"
            href={linkedinHyperlink}
            referrerPolicy="no-referrer"
          >
            {linkedinHyperlink === "" ? "" : "LinkedIn"}
          </a>
          <a
            className="github-link"
            href={githubHyperlink}
            referrerPolicy="no-referrer"
          >
            {githubHyperlink === "" ? "" : "GitHub"}
          </a>
        </div>
      </Fragment>
    );
  });
}

export default Personal;
