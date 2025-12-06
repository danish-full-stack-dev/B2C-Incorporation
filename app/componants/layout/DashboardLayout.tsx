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

  return (
    <div>
      {path === "/design" ? <DesignPageNavbar /> : <Navbar />}
      {children}
      {path === "/design" ? <DesignPageFooter /> : <Footer />}
    </div>
  );
}
