'use client';
import { Input } from '@components/ui/input';
import { signIn } from 'next-auth/react';
import { useRef, useState } from 'react';
import { Button } from '@components/ui/button';
import { Combobox } from '@components/ui/combobox';
import { Checkbox } from '@components/ui/checkbox';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Loader2 } from 'lucide-react';

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const email = useRef('');
  const pass = useRef('');
  const firstname = useRef('');
  const lastname = useRef('');

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await signIn('credentials', {
      email: email.current,
      password: pass.current,
      redirect: true,
      callbackUrl: '/',
    });
    setIsLoading(false);
  };
  return (
    <div className="w-full">
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <Input
            className="w-full"
            type="firstname"
            id="firstname"
            placeholder="First Name"
            onChange={(e) => (firstname.current = e.target.value)}
          />
          <Input
            className="w-full"
            type="lastname"
            id="lastname"
            placeholder="Last Name"
            onChange={(e) => (lastname.current = e.target.value)}
          />
          <Input
            className="col-span-2"
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => (email.current = e.target.value)}
          />
          <Input
            className="col-span-2"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => (pass.current = e.target.value)}
          />
          <div className="col-span-2">
            <Combobox />
          </div>
          <div className="col-span-2 flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="font-sm text-xs leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Yes, I understand and agree to the Riguruku <u>Terms of Service</u>,
              including the <u>User Agreement</u> and <u>Privacy Policy</u>.
            </label>
          </div>

          <Button className="col-span-2" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
