import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function CallAndWhatsappButton() {
  return (
    <div className="flex items-center gap-1">
      <Button className="gap-1" variant="secondary">
        <Image src="/call.svg" width={15} height={15} />
        Call
      </Button>
      <Button className="gap-1" variant="destructive">
        <Image src="/whatsapp.svg" width={20} height={20} />
        Whatsapp
      </Button>
    </div>
  );
}
