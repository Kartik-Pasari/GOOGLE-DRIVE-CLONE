"use client";

import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  const { theme } = useTheme();

  return (
    <div>
      <ClerkProvider>
        <Navbar />
        <Sidebar />
        <main className={clsx("w-full min-h-[90vh] relative top-[8vh] pl-72 p-4",theme === "dark" ? "bg-[#1F1F1F]" : "bg-[#ebedf0]")}>
          <div className={clsx("h-[89vh] rounded-md ml-4 p-8",theme==="dark" ? "bg-black" : "bg-white")}>
          {children}
          </div>
        </main>
      </ClerkProvider>
    </div>
  );
};

export default RootLayout;