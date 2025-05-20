// app/(root)/layout.tsx

import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div>{children}</div>
    </ClerkProvider>
  );
};

export default RootLayout;
