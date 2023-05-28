import Nav from "@components/organisms/Nav";
import Sidebar from "@components/organisms/Sidebar";
import "@styles/globals.css";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Riguruku",
  description: "Your personal AI",
};

const RootLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main className="app box-border border-t-[16px] border-primary px-10">
          <Nav></Nav>
          <div className="h-screen relative grid grid-cols-6 gap-4 items-start">
            <Sidebar className="" />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
