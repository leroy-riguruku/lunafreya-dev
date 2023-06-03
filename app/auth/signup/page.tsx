import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card';

import { Button } from '@components/ui/button';
import SignupForm from '@components/organisms/SignupForm';
import Link from 'next/link';
interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const RegisterPage = ({ searchParams }: IProps) => {
  return (
    <div className="col-span-8 flex items-center justify-center p-12">
      <Card className="flex w-[500px] flex-col items-center justify-center">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button variant="link"><Link href="/">Already have an account? Login</Link></Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
