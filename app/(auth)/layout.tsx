 

import Navbar from "@/components/shared/navbar";
import { ChildProps } from "@/types";
import { ClerkProvider } from "@clerk/nextjs";
import { Sidebar } from "lucide-react";
import React from "react";

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <ClerkProvider>
      <div className="relative">
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
