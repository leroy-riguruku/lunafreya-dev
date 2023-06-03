type InteractiveProps = {
  children: React.ReactNode;
  className: string;
};

const Interactive = (props: InteractiveProps) => {
  return <div className={`${props.className}`}>{props.children}</div>;
};

export default Interactive;
