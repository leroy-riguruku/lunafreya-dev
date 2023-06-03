'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@components/molecules/Logo';
import Search from '@components/molecules/Search';
import IconButton from '@components/molecules/IconButton';
import {
  EnvelopeIcon,
  BellIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@components/ui/button';
const AppBar = () => {
  const { data: session } = useSession();
  return (
    <nav className="relative grid h-16 grid-cols-12 items-center justify-center gap-4 px-10 pt-4">
      <div className="col-span-2 col-start-1 flex">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="col-span-3 col-start-3">{session?.user ? <Search /> : <></>}</div>
      {!session?.user && (
        <div className="col-span-2 col-start-11 justify-self-end">
          <Button variant="ghost" onClick={() => signIn()}>
            Login
          </Button>
        </div>
      )}
      <div className="col-end-13 flex justify-end space-x-4 justify-self-end">
        {session?.user && (
          <>
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
            <Button onClick={() => signOut()}>Sign Out</Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default AppBar;
