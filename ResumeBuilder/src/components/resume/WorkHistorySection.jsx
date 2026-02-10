import BulletPoints from "./BulletPoints.jsx";

function WorkHistory({ sectionName, content }) {
  return content[sectionName].map((group, i) => {
    return (
      <div className={`${sectionName}-wrapper`} key={`${sectionName}-${i}`}>
        <div className="content-header">
          <div className="content-title">
            <span>{group.jobTitle}</span>
            <span> - </span>
            <span>{group.employer}</span>
          </div>
          <div className="content-subtitle">
            <div className="date">
              <div className="start">{group.startDate}</div>
              <div className="end">{group.endDate}</div>
            </div>
          </div>
        </div>
        <div className="location">{group.location}</div>
        <div className="bullet-wrapper">
          <BulletPoints description={group.description} />
        </div>
      </div>
    );
  });
}

export default WorkHistory;
