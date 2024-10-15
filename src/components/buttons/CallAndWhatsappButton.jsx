"use client";

import { phone } from "@/lib/phone";
import { Button } from "../ui/button";
import Image from "next/image";

export default function CallAndWhatsappButton() {
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
    window.open(`https://wa.me/${phone}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`, "_blank");
  };

  return (
    <div className="flex items-center gap-1">
      <Button onClick={handleCallClick} className="gap-1" variant="secondary">
        <Image src="/call.svg" width={15} height={15} alt="Call" />
        Call
      </Button>
      <Button onClick={handleWhatsAppClick} className="gap-1" variant="destructive">
        <Image src="/whatsapp.svg" width={20} height={20} alt="WhatsApp" />
        Whatsapp
      </Button>
    </div>
  );
}
