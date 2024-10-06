import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="rounded-lg bg-primary p-2.5 text-white">
        <MenuIcon size={24} />
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center flex-col text-center text-2xl">
            <Image src="/logo.png" width={100} height={100} />
            Instant Appliances Repairs
          </SheetTitle>
          <SheetDescription className="text-center sm:text-lg">
            Instant Appliances Repairs is a home appliances repair service in
            Dubai and Abu Dhabi, that provides washing machine repair,
            refrigerator repair, dishwasher repair, dryer repair, stove and
            cooker repair, gas oven repair and television repair.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center gap-3 py-10 text-xl font-semibold">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="/services">
            Services
          </Link>
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
