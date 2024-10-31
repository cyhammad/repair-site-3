import CallAndWhatsappButton from "@/components/buttons/CallAndWhatsappButton";
import { data } from "@/lib/data";
import { phone } from "@/lib/phone";
import Link from "next/link";
import React from "react";

export default function ServicePage({ params }) {
  const { service } = params;
  const deslugify = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const serviceName = deslugify(service);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-[10rem] w-full items-center justify-center bg-secondary py-10">
        <div className="flex w-full max-w-7xl items-center px-5">
          <h1 className="text-3xl font-bold lg:text-5xl">{serviceName}</h1>
        </div>
      </div>
      <div className="grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.75fr]">
        <div className="flex w-full flex-col gap-3 py-5 text-lg text-black/80 md:py-10">
          {data[service].content}
          {/* Our commitment section */}
          <div className="flex flex-col gap-3 rounded-lg bg-secondary p-3">
            <h1 className="text-3xl font-bold">Our Commitment</h1>
            <span className="text-black/80">
              We are committed to providing you with the best service possible.
              We use only the highest quality parts and equipment. Our staff are
              highly trained and provide the best customer service available to
              you. We are committed to providing you with the best service
              possible.
              <br /> UAE Appliance Fix
s is a reputed appliance repair
              company in Dubai and Abu Dhabi which provides fast, reliable and
              affordable home appliance repair services.
            </span>
          </div>
          <div className="gap- flex flex-col rounded-lg bg-primary p-5 text-white">
            <h1 className="text-2xl font-bold">
              Arrange your appointment easily right now!
            </h1>
            <span className="text-white/80">
              After appointment UAE Appliance Fix
 team will reach you
              within 24 hrs.
            </span>
            <div className="mt-5">
              <CallAndWhatsappButton />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:py-10">
          <img
            src={data[service].image}
            alt="Fridge"
            className="hidden w-full rounded-lg md:block"
          />
          <div className="mb-10 flex flex-col gap-3 rounded-lg bg-secondary p-3">
            <h1 className="text-4xl font-bold">Other Services</h1>
            <div className="flex flex-col gap-3">
              {Object.keys(data).map((key) => {
                if (key !== service) {
                  return (
                    <div className="flex items-center gap-5">
                      <img
                        src={data[key].image}
                        alt="service"
                        className="h-24 w-24 rounded-lg"
                      />
                      <div className="flex w-full flex-col">
                        <Link
                          key={key}
                          href={`/service/${key}`}
                          className="text-2xl hover:underline"
                        >
                          {deslugify(key)}
                        </Link>
                        <span className="leading-4 text-black/50">
                          {data[key].shortDesc}
                        </span>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
