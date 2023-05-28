import Link from "next/link";
import Logo from "@components/molecules/Logo";
type InteractiveProps = {
  className: string;
};
const Sidebar = (prop: InteractiveProps) => {
  return (
    <div className={prop.className}>
      <div className="pt-10 flex-col space-y-2 flex justify-center">
        <h2>Learn</h2>
        <h2>Dashboard</h2>
      </div>
    </div>
  );
};

export default Sidebar;
