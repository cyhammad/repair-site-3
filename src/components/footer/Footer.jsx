import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-primary px-3 text-white">
      <div className="grid w-full max-w-7xl gap-10 py-10 sm:grid-cols-[0.75fr_1fr]">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Instant Appliances Repairs</h1>
          <span className="text-white/80">
            Instant appliances repairs is a reputed appliance repair company in
            Dubai and Abu Dhabi which provides fast, reliable and affordable
            home appliance repair services. We offer home appliance repair
            services of all well known electronic brands in all over Dubai.
          </span>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center text-nowrap">
            <div className="h-[1px] w-full bg-white/20"></div>
            <div className="px-3 text-center text-2xl font-bold">
              Repair Services
            </div>
            <div className="h-[1px] w-full bg-white/20"></div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5">
            <Link
              href="/service/washing-machine-repair"
              className="hover:underline"
            >
              Washing machine repair
            </Link>
            <Link
              href="/service/refrigerator-repair"
              className="hover:underline"
            >
              Refrigerator repair
            </Link>
            <Link href="/service/dishwasher-repair" className="hover:underline">
              Dishwasher repair
            </Link>
            <Link href="/service/dryer-repair" className="hover:underline">
              Dryer repair
            </Link>
            <Link href="/service/tv-repair" className="hover:underline">
              TV repair
            </Link>
            <Link href="/service/gas-oven-repair" className="hover:underline">
              Gas Oven repair
            </Link>
            <Link
              href="/service/stove-cooker-repair"
              className="hover:underline"
            >
              Stove / Cooker repair
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center border-t border-white/20 py-4">
        &copy; 2024 Instant Appliances Repairs. All rights reserved.
      </div>
    </div>
  );
}
