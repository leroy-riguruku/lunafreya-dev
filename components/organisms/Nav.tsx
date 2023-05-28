import Link from "next/link";
import Image from "next/image";
import Logo from "@components/molecules/Logo";
import Search from "@components/molecules/Search";
import IconButton from "@components/molecules/IconButton";
import {
  EnvelopeIcon,
  BellIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
const Nav = () => {
  return (
    <nav className="pt-2">
      <div className="relative h-16 grid grid-cols-6 gap-4 items-center justify-center">
        <div className="col-start-1 flex">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="col-start-2 col-span-2">
          <Search />
        </div>
        <div className="col-start-6 flex justify-end space-x-4">
          <IconButton>
            <EnvelopeIcon className="h-6 w-6 text-gray-500" />
          </IconButton>
          <IconButton>
            <BellIcon className="h-6 w-6 text-gray-500" />
          </IconButton>
          <IconButton>
            <UserCircleIcon className="h-6 w-6 text-gray-500" />
            <ChevronDownIcon className="h-3 w-3 text-gray-500" />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
