"use client";

import { SignUp } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function SignInPage() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp 
        appearance={{
          baseTheme: resolvedTheme === 'dark' ? dark : shadesOfPurple
        }} 
        path="/sign-up"
      />
    </div>
  );
}