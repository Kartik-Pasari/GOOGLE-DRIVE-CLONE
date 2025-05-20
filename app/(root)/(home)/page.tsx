/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
  useClerk,
} from "@clerk/nextjs";

export default function HomePage() {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut({ redirectUrl: "/sign-in" });
  };

  return (
    <>
      {/* Show this only if user is signed in */}
      <SignedIn>
        <h1>Welcome, you are signed in!</h1>

        {/* You can use either UserButton or your own custom button */}
        {/* <UserButton /> */}

        <button onClick={handleSignOut} style={{ cursor: "pointer" }}>
          Sign Out
        </button>
      </SignedIn>

      {/* Automatically redirect to /sign-in if user is signed out */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
