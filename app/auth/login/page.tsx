import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card';
import LoginForm from '@components/organisms/LoginForm';
import Link from 'next/link';

import { Button } from '@components/ui/button';
interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const LoginPage = ({ searchParams }: IProps) => {
  return (
    <div className="col-span-8 flex items-center justify-center p-12">
      <Card className="flex w-[500px] flex-col items-center justify-center">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button variant="link"><Link href="/auth/signup">No account? Sign up</Link></Button>
          <Button variant="link"><Link href="/">Forgot Password?</Link></Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
