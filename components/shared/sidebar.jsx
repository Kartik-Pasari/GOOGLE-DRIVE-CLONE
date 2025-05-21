"use client";

import { Clock10, Clock5, Cloud, Plus, Star, Tablet, Trash } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import React from "react";
import Link from "next/link";
import Item from "./item";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Popover , PopoverContent , PopoverTrigger } from "../ui/popover";
import PopoverActions from "./popover-actions";


const Sidebar = () => {

  const { theme } = useTheme();

  return (
    <div className={clsx(
      "h-[92vh] w-72 fixed top-[8vh] left-0 z-30 border",
      theme === "dark" ? "bg-[#1F1F1F]" : "bg-[#ebedf0]"
    )}>
      <div className="flex flex-col p-3">
      <Popover>
        <PopoverTrigger asChild>
          <button className={clsx("w-fit h-12 rounded-full px-6 flex items-center gap-2 border",theme === "dark" ? "bg-black" : "bg-white")}>
            <Plus />
            <span>New</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-white p-0 py-2">
          <PopoverActions />
        </PopoverContent>
      </Popover>

        
        <div className="flex flex-col space-y-6 mt-8">
          {sidebarLinks.map(link =>(
            <Link href={link.path} key={link.path}>
               <Item icon={link.icon} label={link.label} path={link.path }/>
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-2 mx-4 py-4">
            <Progress className='h-2 border' value={60}/>
            <span>20MB of 1.5GB used</span>
            <Button className="rounded-full" variant={'outline'}>
              Get more storage
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const sidebarLinks = [
  {
    label : "My Drive",
    icon: Tablet,
    path: "/",
  },
  {
    label : "Starred",
    icon: Star,
    path: "/starred",
  },
  {
    label : "Recent",
    icon: Clock5,
    path: "/recent",
  },
  {
    label : "Trash",
    icon: Trash,
    path: "/trash",
  },
  {
    label : "Storage",
    icon: Cloud,
    path: "/cloud",
  }
]