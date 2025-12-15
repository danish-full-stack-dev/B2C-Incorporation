"use client";
import { Navbar } from "../navbar/Navbar";
import Footer from "../Footer";
import { usePathname } from "next/navigation";
import { DesignPageNavbar } from "../navbar/DesignPageNavbar";
import { DesignPageFooter } from "../DesignPageFooter";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isDesignPage = path.startsWith("/design");

  return (
    <div>
      {isDesignPage ? <DesignPageNavbar /> : <Navbar />}
      {children}
      {isDesignPage ? <DesignPageFooter /> : <Footer />}
    </div>
  );
}
