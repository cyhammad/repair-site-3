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
          <div className="w-[40px] h-[40px] ">
          <svg
            fill="#000000"
            height="100%"
            width="100%"
            viewBox="0 0 489.347 489.347"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path d="M412.642,345.939l-59.523-14.229l-66.352-66.352l51.12-51.055c11.874,4.167,24.216,6.203,36.499,6.202
                c28.736-0.002,57.122-11.149,78.233-32.221c32.686-32.626,41.544-82.646,22.043-124.466l-9.042-19.391l-53.807,53.682
                l-24.986-24.941l53.822-53.696L421.17,10.42C379.3-9.036,329.218-0.195,296.546,32.417
                c-30.131,30.078-40.012,74.943-26.092,114.534l-20.111,20.086L102.13,18.837C91.061,7.731,76.32,1.605,60.621,1.587
                c-0.023,0-0.044,0-0.067,0c-15.696,0-30.45,6.104-41.553,17.195C7.886,29.897,1.77,44.669,1.778,60.378
                c0.008,15.697,6.129,30.456,17.233,41.553L167.18,250.094l-20.155,20.129c-39.652-13.917-84.597-4.061-114.733,26.02
                C-0.393,328.869-9.252,378.888,10.25,420.708l9.042,19.391l53.806-53.681l24.986,24.94l-53.822,53.697l19.48,9.051
                c14.814,6.883,30.652,10.224,46.388,10.224c28.738-0.001,57.124-11.148,78.235-32.221c30.132-30.078,40.013-74.943,26.093-114.534
                l51.082-51.018l66.366,66.366l14.229,59.523l76.705,76.706l66.507-66.507L412.642,345.939z M301.691,144.194
                c-14.181-30.419-7.73-66.807,16.05-90.545c18.28-18.246,44.036-26.278,68.827-22.6l-42.211,42.113l67.451,67.328l42.24-42.142
                c3.697,24.738-4.343,50.456-22.622,68.702c-23.802,23.759-60.288,30.197-90.793,16.02l-9.505-4.417l-34.603,34.559l-24.968-24.965
                l34.573-34.529L301.691,144.194z M31.778,60.362c-0.004-7.69,2.992-14.923,8.43-20.362c5.433-5.426,12.657-8.414,20.347-8.414
                c7.711,0.009,14.918,3.002,20.345,8.446l194.398,194.38l-40.711,40.659L40.221,80.714C34.781,75.277,31.782,68.049,31.778,60.362z
                 M167.171,430.877c-18.28,18.246-44.038,26.278-68.827,22.6l42.211-42.112l-67.451-67.329l-42.24,42.142
                c-3.698-24.737,4.343-50.455,22.623-68.702c23.801-23.758,60.288-30.197,90.792-16.021l9.505,4.417l34.609-34.565l24.967,24.966
                l-34.578,34.534l4.44,9.525C197.403,370.751,190.952,407.138,167.171,430.877z M373.342,397.227l-7.564-31.645l31.646,7.564
                l49.498,49.499l-24.081,24.081L373.342,397.227z"/>
            </g>
          </svg>
        </div>            UAE Appliance Fix
          </SheetTitle>
          <SheetDescription className="text-center sm:text-lg">
            UAE Appliance Fixis a home appliances repair service in
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
