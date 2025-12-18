import CursorDot from "./componants/CursorDot";
import DashboardLayout from "./componants/layout/DashboardLayout";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import CursorDotProvider from "./hooks/CursorContext";
import Script from "next/script";

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
        
        <div className="z-100 bottom-6 right-6 fixed">
          <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="afterInteractive"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6932879fd355bd76d8b85082"
        />
        </div>
      </body>
    </html>
  );
}
