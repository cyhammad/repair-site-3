"use client";

import { Button } from "../ui/button";
import Image from "next/image";

export default function FixedButtons() {
  const phone = "+971558560613"; // Example phone number

  const handleCallClick = () => {
   

    // Open the phone dialer
    window.open(`tel:${phone}`, "_self");
  };

  const handleWhatsAppClick = () => {
    // Send conversion report to Google Analytics for WhatsApp button click
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      gtag_report_conversion(`https://wa.me/${phone}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`);
    }

    // Open WhatsApp
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  return (
    <div className="pointer-events-none fixed bottom-0 flex w-full items-center justify-center z-50 p-5">
      <div className="flex w-full max-w-7xl items-center justify-between gap-5">
        <Button
          onClick={handleCallClick}
          className="pointer-events-auto h-[40px] w-[40px] p-0"
          variant="secondary"
        >
          <Image src="/call.svg" width={24} height={24} alt="Call" />
        </Button>
        <Button
          onClick={handleWhatsAppClick}
          className="pointer-events-auto h-[40px] w-[40px] p-0"
          variant="destructive"
        >
          <Image src="/whatsapp.svg" width={28} height={28} alt="WhatsApp" />
        </Button>
      </div>
    </div>
  );
}
