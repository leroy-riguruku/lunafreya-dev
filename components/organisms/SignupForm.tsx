'use client';
import { Input } from '@components/ui/input';
import { signIn } from 'next-auth/react';
import { useRef, useState } from 'react';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Check, ChevronsUpDown, Loader2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@components/ui/react-hook-form/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Popover } from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from '@components/ui/popover';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@components/ui/command';
import moment from 'moment-timezone';
import { register } from '@app/api/users/register/route';
const signupFormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: 'First name must be at least 2 characters.',
    })
    .max(30, {
      message: 'First name must not be longer than 30 characters.',
    }),
  lastName: z
    .string()
    .max(30, {
      message: 'Last name must not be longer than 30 characters.',
    })
    .optional(),
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email(),
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(6, {
      message: 'Password must be at least 6 characters.',
    }),
  timezone: z.string({
    required_error: 'Please select a timezone.',
  }),
  terms: z.boolean({
    required_error: '',
  }),
});

type SignupFormValues = z.infer<typeof signupFormSchema>;

const defaultValues: Partial<SignupFormValues> = {};

const SignupForm = () => {
  const timezones = moment.tz.names();
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      terms: false,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      timezone: moment.tz.guess().toLowerCase(),
    },
    mode: 'onChange',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (data: SignupFormValues) => {
    setIsLoading(true);
    console.log({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      timezone: moment().tz(data.timezone).format('Z'),
      redirect: true,
      callbackUrl: '/',
    });
    const result = await register({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      timezone: moment().tz(data.timezone).format('Z'),
    });
    setIsLoading(false);
  };
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full"
                      type="firstName"
                      id="firstName"
                      placeholder="First Name*"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full"
                      type="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
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
                <FormItem className="col-span-2">
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

            <FormField
              control={form.control}
              name="timezone"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'w-full justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? timezones.find(
                                (timezone) => timezone.toLowerCase() === field.value
                              )
                            : 'Select timezone*'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search timezone..." />
                        <CommandEmpty>No timezone found.</CommandEmpty>
                        <CommandGroup>
                          {timezones.map((timezone) => (
                            <CommandItem
                              value={timezone}
                              key={timezone}
                              onSelect={(value) => {
                                form.setValue('timezone', value);
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  timezone === field.value ? 'opacity-100' : 'opacity-0'
                                )}
                              />
                              {timezone}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="col-span-2 flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        return field.onChange(checked);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Yes, I understand and agree to the Riguruku <u>Terms of Service</u>,
                    including the <u>User terms</u> and <u>Privacy Policy</u>.
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="col-span-2 font-bold"
              disabled={isLoading || !form.getValues('terms')?.valueOf()}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
