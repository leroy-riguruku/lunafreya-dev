'use client';
import { SessionProvider } from 'next-auth/react';
type DashboardLayoutProps = {
  children: React.ReactNode;
  session: any;
};
const Provider = ({ children, session }: DashboardLayoutProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
