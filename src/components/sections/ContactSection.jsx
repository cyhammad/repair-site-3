import Image from "next/image";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

export default function ContactSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 px-3 py-8">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <div className="flex w-full items-center gap-2">
        <div className="hidden h-[1px] w-full bg-black/20 sm:block"></div>
        <div className="text-center text-black/50 sm:text-nowrap">
          Fast, reliable and affordable home appliance repair services
        </div>
        <div className="hidden h-[1px] w-full bg-black/20 sm:block"></div>
      </div>
      <div className="grid w-full max-w-7xl gap-5 pb-10 pt-2 md:grid-cols-2">
        <div className="flex w-full flex-col justify-center">
          <h1 className="text-3xl">
            Quickly & easily arrange your appointment!
          </h1>
          <span className="text-lg text-black/70">
            We are here to help with all your home appliance repair needs in
            Dubai and Abu Dhabi. Whether it’s a malfunctioning washing machine
            or a broken stove, our expert technicians are just a call or message
            away. Here’s how you can reach us:
          </span>
          <span className="mt-2 text-lg">We provide following services:</span>
          <div className="flex py-5">
            <CallAndWhatsappButton />
          </div>
          <h1 className="text-3xl">Why Choose Instant Appliances Repairs?</h1>
          <ul className="list-disc pl-5 py-2">
            <li>
              <b>Experienced Technicians:</b> Our team has extensive experience
              and training, ensuring they can tackle any refrigerator issue with
              ease.
            </li>
            <li>
              <b>Affordable Rates:</b> We offer competitive pricing without
              compromising on quality.
            </li>
            <li>
              <b>Quick Response:</b> We understand the urgency of refrigerator
              repairs and strive to provide same-day service.
            </li>
            <li>
              <b>Guaranteed Satisfaction:</b> We stand by our work and offer a
              satisfaction guarantee on all repairs.
            </li>
          </ul>
          <span className="py-2">
            In order to contact us for any of the above services, please call us
            or send us a message on WhatsApp.
          </span>
        </div>
        <div className="h-[30rem] w-full rounded-lg bg-[url('/b-3.jpg')] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}
