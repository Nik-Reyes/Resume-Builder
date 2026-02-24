function Skills({ content }) {
  return (
    <ul className="category-list">
      {content.map((category) => {
        return (
          <li key={`cat-${category.id}`}>
            <div className="category">
              <div className="category-label">{category.category + ":"}</div>
              <div className="category-skills">
                <ul className="skill-list">
                  {category.skills.map((skill, i) => {
                    const skl = skill.skill.trim();
                    return (
                      <li className="skill-list-item" key={`skill-${skill.id}`}>
                        {`${i === 0 ? skl : " " + skl}${
                          i < Object.keys(category.skills).length - 1 ? "," : ""
                        }`}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Skills;
