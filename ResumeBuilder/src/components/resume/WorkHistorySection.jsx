import { format, parseISO } from "date-fns";
import BulletPoints from "./BulletPoints.jsx";

function WorkHistory({ sectionName, content }) {
  return content.map((group, i) => {
    return (
      <div className={`${sectionName}-wrapper`} key={`${sectionName}-${i}`}>
        <div className="content-header">
          <div className="content-title">
            <span>{group.jobTitle}</span>
            <span> {group.jobTitle && "-"} </span>
            <span>{group.employer}</span>
          </div>
          <div className="content-subtitle">
            <div className="date">
              <div className="start">
                {group.startDate &&
                  format(new Date(parseISO(group.startDate)), "MMMM yyyy")}
              </div>
              <span> {group.startDate && "-"} </span>
              <div className="end">
                {group.endDate &&
                  format(new Date(parseISO(group.endDate)), "MMMM yyyy")}
              </div>
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
