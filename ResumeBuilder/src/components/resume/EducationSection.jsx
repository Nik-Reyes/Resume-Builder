function Education({ sectionName, content }) {
  return content[sectionName].map((group, i) => {
    return (
      <div className={`${sectionName}-wrapper`} key={`${sectionName}-${i}`}>
        <div className="content-header">
          <div className="content-title">{group.degree}</div>
          <div className="content-subtitle">{group.university}</div>
        </div>
        <div className="date">
          <div className="end">{group.endDate}</div>
        </div>
      </div>
    );
  });
}

export default Education;
