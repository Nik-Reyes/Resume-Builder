function Message({ children, ...props }) {
  return <div className={`Message-wrapper ${props.className}`}>{children}</div>;
}

export default Message;
