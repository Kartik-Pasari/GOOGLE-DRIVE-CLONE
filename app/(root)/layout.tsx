
import Navbar from "@/components/shared/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Sidebar } from "lucide-react";
import React from "react";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
        <Navbar />
        <Sidebar />
        {children}
      </ClerkProvider>
    </div>
  );
};

export default RootLayout;