"use client";
import { Navbar } from "../navbar/Navbar";
import Footer from "../Footer";
import { usePathname } from "next/navigation";
import { DesignPageNavbar } from "../navbar/DesignPageNavbar";
import { DesignPageFooter } from "../DesignPageFooter";
import { ORMPageNavbar } from "../navbar/ORMPageNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const isDesignPage = path.startsWith("/design");
  const isORMPage = path.endsWith("/orm-service");

  return (
    <div>
      <>
        {isDesignPage ? (
          <DesignPageNavbar />
        ) : isORMPage ? (
          <ORMPageNavbar />
        ) : (
          <Navbar />
        )}
        {children}
        {isDesignPage ? <DesignPageFooter /> : <Footer />}
      </>
    </div>
  );
}
