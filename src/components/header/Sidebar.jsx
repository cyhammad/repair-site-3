"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Sidebar() {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  return (
    <Sheet>
      <SheetTrigger className="rounded-lg bg-primary p-2.5 text-white">
        <MenuIcon size={24} />
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle className="flex flex-col items-center justify-center text-center text-2xl">
            <Image src="/logo.png" width={100} height={100} />
            UAE Appliance Fix
s
          </SheetTitle>
          <SheetDescription className="text-center sm:text-lg">
            UAE Appliance Fix
s is a home appliances repair service in
            Dubai and Abu Dhabi, that provides washing machine repair,
            refrigerator repair, dishwasher repair, dryer repair, stove and
            cooker repair, gas oven repair and television repair.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center gap-3 py-10 text-xl font-semibold">
          <SheetClose asChild>
            <Link className="hover:underline" href="/">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="hover:underline" href="/about">
              About
            </Link>
          </SheetClose>
          <div className="flex flex-col">
            <button className="flex items-center justify-center gap-1 pl-4" onClick={() => setServicesDropdown(!servicesDropdown)}>
              Services{" "}
              <span className={cn(servicesDropdown ? "rotate-180" : "rotate-0", "transition-all ease-in duration-150")}>
                <ChevronDown size={20} />
              </span>
            </button>
            <div
              className={cn(
                "flex max-w-sm flex-wrap items-center justify-center gap-x-5 gap-y-3 overflow-hidden font-light transition-all duration-200 ease-in-out",
                servicesDropdown ? "my-2 border-y py-2" : "h-0",
              )}
            >
              <SheetClose asChild>
                <Link
                  className="hover:underline"
                  href="/service/washing-machine-repair"
                >
                  Washing Machine
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="hover:underline"
                  href="/service/refrigerator-repair"
                >
                  Refrigerator
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="hover:underline"
                  href="/service/dishwasher-repair"
                >
                  Dishwasher
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link className="hover:underline" href="/service/dryer-repair">
                  Dryer
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link className="hover:underline" href="/service/stove-cooker-repair">
                  Stove / Cooker
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="hover:underline"
                  href="/service/tv-repair"
                >
                  Television
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="hover:underline"
                  href="/service/gas-oven-repair"
                >
                  Gas Oven
                </Link>
              </SheetClose>
            </div>
          </div>
          <SheetClose asChild>
            <Link className="hover:underline" href="/contact">
              Contact
            </Link>
          </SheetClose>
          <CallAndWhatsappButton />
        </div>
      </SheetContent>
    </Sheet>
  );
}
