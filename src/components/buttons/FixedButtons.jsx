"use client"

import { Button } from "../ui/button";
import Image from "next/image";

export default function FixedButtons() {
  const phone = "+971558560613"; // Example phone number

  return (
    <div className="pointer-events-none fixed bottom-0 flex w-full items-center justify-center z-50 p-5">
      <div className="flex w-full max-w-7xl items-center justify-between gap-5">
        <Button
          onClick={() => {
            window.open(`tel:${phone}`, "_self"); // Opens the phone dialer
          }}
          className="pointer-events-auto h-[40px] w-[40px] p-0"
          variant="secondary"
        >
          <Image src="/call.svg" width={24} height={24} alt="Call" />
        </Button>
        <Button
          onClick={() => {
            window.open(`https://wa.me/${phone}`, "_blank"); // Opens WhatsApp
          }}
          className="pointer-events-auto h-[40px] w-[40px] p-0"
          variant="destructive"
        >
          <Image src="/whatsapp.svg" width={28} height={28} alt="WhatsApp" />
        </Button>
      </div>
    </div>
  );
}
