import CursorDot from "./componants/CursorDot";
import DashboardLayout from "./componants/layout/DashboardLayout";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import CursorDotProvider from "./hooks/CursorContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "B2C Incorporation",
  description: "We provide professional AI, web, and automation services.",
   icons: {
    icon: "/favicon.png",
  },
   other: {
    "google-site-verification": "MrrOtc9uOzs3bwGxlkS8iiFmsB2CgH_FkRZHRa5twGg",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorDotProvider>
        <CursorDot />
        <DashboardLayout>
          {children}
        </DashboardLayout>
        </CursorDotProvider>
        
      </body>
    </html>
  );
}
