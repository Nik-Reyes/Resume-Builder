import BulletPoints from "./BulletPoints.jsx";

function Projects({ sectionName, content }) {
  return content[sectionName].map((group, i) => {
    return (
      <div className={`${sectionName}-wrapper`} key={`${sectionName}-${i}`}>
        <div className="content-header">
          <div className="content-title">
            <span>{group.projectTitle}</span>
          </div>
          <div className="content-link">
            <a href={group.github} className="github-link">
              GitHub
            </a>
          </div>
        </div>
        <div className="bullet-wrapper">
          <BulletPoints description={group.description} />
        </div>
      </div>
    );
  });
}

export default Projects;
