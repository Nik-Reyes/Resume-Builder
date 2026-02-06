import { Fragment } from "react";

function Personal({ sectionName, content }) {
  return content[sectionName].map((personal, i) => {
    const sectionTitle = personal.firstName + " " + personal.lastName;
    const phone = personal.phone;
    const location = personal.location;
    const email = personal.email;
    const linkedinHyperlink = personal.linkedin;
    const githubHyperlink = personal.github;

    return (
      <Fragment key={`${sectionName}-${i}`}>
        <div className="section-title">{sectionTitle}</div>
        <div className="datalayer">
          <span>{phone}</span>
          <span>{location}</span>
          <span>{email}</span>
          <a href={linkedinHyperlink} referrerPolicy="no-referrer">
            {linkedinHyperlink === "" ? "" : "LinkedIn"}
          </a>
          <a href={githubHyperlink} referrerPolicy="no-referrer">
            {githubHyperlink === "" ? "" : "GitHub"}
          </a>
        </div>
      </Fragment>
    );
  });
}

export default Personal;
