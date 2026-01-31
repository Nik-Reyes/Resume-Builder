import { Fragment } from "react";
function Education({ section, content }) {
  return content[section].map((group, i) => {
    console.log(group);
    return (
      <Fragment key={`${section}-${i}`}>
        <div className="content-header">
          <div className="content-title">{group.degree}</div>
          <div className="content-subtitle">{group.university}</div>
        </div>
        <div className="date">
          <div className="start">{group.startDate}</div>
          <div className="end">{group.endDate}</div>
        </div>
      </Fragment>
    );
  });
}

export default Education;
