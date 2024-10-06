import Image from "next/image";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

export default function AboutSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 px-3 py-8">
      <h1 className="text-4xl font-bold">About Us</h1>
      <div className="flex w-full items-center gap-2">
        <div className="hidden h-[1px] w-full bg-black/20 sm:block"></div>
        <div className="text-center text-black/50 sm:text-nowrap">
          Fast, reliable and affordable home appliance repair services
        </div>
        <div className="hidden h-[1px] w-full bg-black/20 sm:block"></div>
      </div>
      <div className="grid w-full max-w-7xl gap-5 pb-10 pt-2 md:grid-cols-2">
        <div className="h-[30rem] w-full rounded-lg bg-[url('/b-2.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="flex w-full flex-col justify-center">
          <h1 className="text-2xl font-bold">Who are we?</h1>
          <span className="text-lg text-black/70">
            We are a team of professional technicians who are dedicated to
            providing the best home appliance repair services in Dubai and Abu
            Dhabi. We have been in the business for over 10 years and have a
            proven track record of delivering high-quality services to our
            customers.
          </span>
          <span className="mt-2 text-lg">We provide following services:</span>
          <ul className="list-inside list-disc text-lg text-black/70">
            <li>Washing machine repair</li>
            <li>Refrigerator repair</li>
            <li>Dishwasher repair</li>
            <li>Dryer repair</li>
            <li>TV repair</li>
            <li>Gas Oven repair</li>
            <li>Stove / Cooker repair</li>
          </ul>
          <span className="py-2">
            In order to contact us for any of the above services, please call us
            or send us a message on WhatsApp.
          </span>
          <CallAndWhatsappButton />
        </div>
      </div>
    </div>
  );
}
