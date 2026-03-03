import { format, parseISO } from "date-fns";

function Education({ sectionName, content }) {
  return content.map((group, i) => {
    return (
      <div className={`${sectionName}-wrapper`} key={`${sectionName}-${i}`}>
        <div className="content-header">
          <div className="content-title">{group.degree}</div>
          <div className="content-subtitle">{group.university}</div>
        </div>
        <div className="date">
          <div className="end">
            {group.endDate &&
              format(new Date(parseISO(group.endDate)), "MMMM yyyy")}
          </div>
        </div>
      </div>
    );
  });
}

export default Education;
