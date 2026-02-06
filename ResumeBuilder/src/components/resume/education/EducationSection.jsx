import { Fragment } from "react";

function Education({ sectionName, content }) {
  return content[sectionName].map((group, i) => {
    return (
      <Fragment key={`${sectionName}-${i}`}>
        <div className="content-header">
          <div className="content-title">{group.degree}</div>
          <div className="content-subtitle">{group.university}</div>
        </div>
        <div className="date">
          <div className="end">{group.endDate}</div>
        </div>
      </Fragment>
    );
  });
}

export default Education;
