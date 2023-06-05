'use client';
import { Input } from '@components/ui/input';
import { signIn } from 'next-auth/react';
import { useRef, useState } from 'react';
import { Button } from '@components/ui/button';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Loader2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@components/ui/react-hook-form/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';

const signinFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email(),
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(3, {
      message: 'Password must be at least 6 characters.',
    }),
});

type SigninFormValues = z.infer<typeof signinFormSchema>;

const defaultValues: Partial<SigninFormValues> = {};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: SigninFormValues) => {
    setIsLoading(true);
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/',
    });
    setIsLoading(false);
  };
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input type="email" id="email" placeholder="Email*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Password*"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="font-bold" disabled={isLoading}>
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
      </Form>
    </div>
  );
};

export default LoginForm;
