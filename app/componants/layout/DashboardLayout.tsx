"use client";
import { Navbar } from "../navbar/Navbar";
import Footer from "../Footer";
import { usePathname } from "next/navigation";
import { DesignPageNavbar } from "../navbar/DesignPageNavbar";
import { DesignPageFooter } from "../DesignPageFooter";
import { ORMPageNavbar } from "../navbar/ORMPageNavbar";
import { useLoading } from "@/app/context/LoadingContext";
import { useEffect, useRef } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, setIsLoading } = useLoading();
  const path = usePathname();
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(t);
  }, [setIsLoading]);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [path, setIsLoading]);

  const isDesignPage = path.startsWith("/design");
  const isORMPage = path.endsWith("/orm-service");

  return (
    <div>
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-800"></div>
        </div>
      ) : (
        <>
          {isDesignPage ? (
            <DesignPageNavbar />
          ) : isORMPage ? (
            <ORMPageNavbar />
          ) : (
            <Navbar />
          )}
          {children}
          {isDesignPage ? <Footer /> : <Footer />}
        </>
      )}
    </div>
  );
}
