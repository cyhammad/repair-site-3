"use client";

import { Button } from "../ui/button";
import Image from "next/image";

export default function FixedButtons() {
  return (
    <div className="pointer-events-none fixed bottom-0 flex w-full items-center justify-center z-50 p-5">
      <div className="flex w-full max-w-7xl items-center justify-between gap-5">
        <Button
          onClick={() => {
            window.location.href = `tel:${phone}`;
          }}
          className="pointer-events-auto h-[40px] w-[40px] p-0"
          variant="secondary"
        >
          <Image src="/call.svg" width={24} height={24} />
        </Button>
        <Button
          onClick={() => {
            window.location.href = `https://wa.me/${phone}`;
          }}
          className="pointer-events-auto h-[40px] w-[40px] p-0"
          variant="destructive"
        >
          <Image src="/whatsapp.svg" width={28} height={28} />
        </Button>
      </div>
    </div>
  );
}
