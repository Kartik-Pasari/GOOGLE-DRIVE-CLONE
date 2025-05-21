"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

const UserBox = () => {
  const {user} = useUser();
  const {signOut} = useClerk();
  const router = useRouter();

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div role="button">
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
        </Avatar>
      </div>
    </DropdownMenuTrigger>
  
    <DropdownMenuContent className="w-56 mt-6" align="end" alignOffset={-14} forceMount>
      <div className="flex flex-col space-y-4 p-2">
        {/* Right-aligned email */}
        <p className="text-xs font-medium leading-none text-muted-foreground text-right">
          {user?.emailAddresses[0].emailAddress}
        </p>
  
        {/* Left-aligned avatar + name */}
        <div className="flex items-center gap-x-2">
          <div className="rounded-md bg-secondary p-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
          </div>
          <div className="space-y-1 max-w-[150px]">
            <p className="text-sm truncate">{user?.fullName}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground">
          <div role="button" onClick={()=>signOut(()=>router.push("/sign-in"))}>
            Log out
          </div>
        </DropdownMenuItem>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>  

  )
};

export default UserBox;
