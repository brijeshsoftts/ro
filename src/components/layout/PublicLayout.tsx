import { cn } from "cn";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

export function PublicLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-svh flex-col bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main className={cn("flex-1", !isHome && "")}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

function Navbar() {
  return <></>;
}

function Footer() {
  return <div></div>;
}
