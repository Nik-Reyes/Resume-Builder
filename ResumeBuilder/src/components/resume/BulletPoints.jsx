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
  let desc = description.trim();
  let points = null;

  const bulletType = Object.values(BULLET_CHARS).find((val) =>
    desc.includes(val)
  );

  if (bulletType) {
    if (desc[0] === bulletType) desc = desc.slice(1);
    points = desc.split(bulletType);
  } else {
    points = desc.split(newline);
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
