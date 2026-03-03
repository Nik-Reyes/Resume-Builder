function Skills({ content }) {
  return (
    <ul className="category-list">
      {content.map((category) => {
        return (
          <li key={`cat-${category.id}`}>
            <div className="category">
              <div className="category-label">
                {category.category === ""
                  ? "Uncategorized: "
                  : category.category + ":"}
              </div>
              <div className="category-skills">
                <ul className="skill-list">
                  {category.skills.map((skill, i) => {
                    return (
                      <li className="skill-list-item" key={`skill-${skill.id}`}>
                        {`${i === 0 ? skill.skill : " " + skill.skill}${
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
