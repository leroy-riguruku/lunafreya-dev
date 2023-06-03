import AppBar from '@components/organisms/AppBar';
import Sidebar from '@components/organisms/Sidebar';
import '@styles/globals.css';
import Provider from '@components/molecules/Provider';
import Footer from '@components/organisms/Footer';

type DashboardLayoutProps = {
  children: React.ReactNode;
  session: any;
};

export const metadata = {
  title: 'Riguruku',
  description: 'Your personal AI',
};

const RootLayout = ({ children, session }: DashboardLayoutProps) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider session={session}>
          <header className="box-border border-t-[16px] border-primary" />
          <AppBar />
          <main className="app">
            <section className="relative grid grid-cols-12 items-start gap-4 px-10 ">
              <aside className="col-span-2 ">
                <Sidebar className="h-screen" />
              </aside>
              <div className="col-span-10 col-start-3 grid grid-cols-10 gap-4">
                {children}
              </div>
            </section>
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
