'use client';
import { Button } from '@components/ui/button';
import { useSession } from 'next-auth/react';
type InteractiveProps = {
  className: string;
};
const Sidebar = (prop: InteractiveProps) => {
  const { data: session } = useSession();
  return (
    <>
      {session?.user && (
        <div className={prop.className}>
          <div className="flex flex-col justify-center space-y-2 pt-10">
            <ul>
              <li>
                <Button className="w-2/3 justify-start text-base" variant="ghost">
                  Learn
                </Button>
              </li>
              <li>
                <Button className="w-2/3 justify-start text-base" variant="ghost">
                  Dashboard
                </Button>
              </li>
              <li>
                <Button className="w-2/3 justify-start text-base" variant="ghost">
                  Schedule
                </Button>
              </li>
              <li>
                <Button className="w-2/3 justify-start text-base" variant="ghost">
                  My Notes
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
