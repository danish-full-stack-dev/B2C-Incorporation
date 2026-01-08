"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Portfolio() {
  const router = useRouter();
  useEffect(() => {
    router.push("/design/pages/about-us");
  });
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-800"></div>
    </div>
  );
}
