const BULLET_CHARS = {
  BULLET: "•",
  BLACK_CIRCLE: "●",
  WHITE_CIRCLE: "○",
  CIRCLE: "◦",
  HYPHEN_BULLET: "‣",
  BLACK_SQUARE: "■",
  WHITE_SQUARE: "□",
  SMALL_SQUARE: "▪",
  WHITE_SMALL_SQUARE: "▫",
  BLACK_DIAMOND: "◆",
  WHITE_DIAMOND: "◇",
  DIAMOND: "⬥",
  BLACK_TRIANGLE: "▶",
  WHITE_TRIANGLE: "▷",
  ARROW: "➤",
  ARROW_RIGHT: "→",
  DOUBLE_ARROW: "⇒",
  STAR: "★",
  ASTERISK: "∗",
  FLOWER: "✿",
  CHECK: "✓",
  CROSS: "✗",
  DASH: "–",
  EM_DASH: "—",
  HYPHEN: "-",
};

function BulletPoints({ description }) {
  const newline = "\n";
  if (description.length === 0) return null;
  let points = null;

  const bulletType = Object.values(BULLET_CHARS).find((val) =>
    description.includes(val)
  );

  if (bulletType) {
    if (description[0] === bulletType) description = description.slice(1);
    points = description.split(bulletType);
  } else {
    points = description.split(newline);
  }

  return (
    <ul className="bullet-points">
      {points.map((point, i) => (
        <li key={i}>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default BulletPoints;
