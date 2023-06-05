import { signIn } from 'next-auth/react';
type Register = {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  timezone: string;
};
export async function register(req: Register) {
  const res = await fetch('http://stg.noctis.riguruku.com/api/v1/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
  if (res) {
    return await signIn('credentials', {
      email: req.email,
      password: req.password,
      redirect: true,
      callbackUrl: '/',
    });
  }
  return res;
}
