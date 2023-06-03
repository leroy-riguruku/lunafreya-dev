import Interactive from '@components/atoms/Interactive';
type InteractiveProps = {
  children: React.ReactNode;
};
const IconButton = (props: InteractiveProps) => {
  return (
    <Interactive className="bg-neutral rounded-2xl px-1">
      <div className="flex h-10 w-10 items-center justify-center">{props.children}</div>
    </Interactive>
  );
};

export default IconButton;
