import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { ChildProps } from "@/types";
import { ClerkProvider } from "@clerk/nextjs";

import React from "react";

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <ClerkProvider>
      <div className="relative">
        <div className="absolute inset-0 z-40 h-screen w-screen bg-black/50"/>
        <Navbar />
        <Sidebar />
        <main className="flex items-center justify-center w-full h-[90vh] z-50 relative">
          {children}
        </main>
      </div>
    </ClerkProvider>
  );
};

export default AuthLayout;
