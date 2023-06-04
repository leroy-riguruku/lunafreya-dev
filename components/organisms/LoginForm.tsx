'use client';
import { Input } from '@components/ui/input';
import { signIn } from 'next-auth/react';
import { useRef, useState } from 'react';
import { Button } from '@components/ui/button';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Loader2 } from 'lucide-react';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const email = useRef('');
  const pass = useRef('');

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
        <div className="grid gap-4">
          <Input
            className="w-full"
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => (email.current = e.target.value)}
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => (pass.current = e.target.value)}
          />

          <Button disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                <EnvelopeIcon className="mr-2 h-6 w-5" />
              </>
            )}
            Login with Email
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
