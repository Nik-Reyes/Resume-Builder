function Footer({ className = "", children }) {
  return (
    <div className={className}>
      <div className="spacer"></div>
      <div className="footer-content">{children}</div>
    </div>
  );
}

export default Footer;
