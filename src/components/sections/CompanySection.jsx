import Image from "next/image";
import React from "react";

export default function CompanySection() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-5 px-3 py-10">
        <h1 className="text-3xl font-bold">Companies & Brands</h1>
        <div className="grid w-full grid-cols-3 place-items-center gap-2 md:grid-cols-5">
          <Image src="/c-6.webp" width={200} height={200} />
          <Image src="/c-7.webp" width={200} height={200} />
          <Image src="/c-8.webp" width={200} height={200} />
          <Image src="/c-9.webp" width={200} height={200} />
          <Image src="/c-10.webp" width={200} height={200} />
          <Image src="/c-1.webp" width={200} height={200} />
          <Image src="/c-2.webp" width={200} height={200} />
          <Image src="/c-3.webp" width={200} height={200} />
          <Image src="/c-4.webp" width={200} height={200} />
          <Image src="/c-5.webp" width={200} height={200} />
          <Image src="/c-16.webp" width={200} height={200} />
          <Image src="/c-17.webp" width={200} height={200} />
          <Image src="/c-18.webp" width={200} height={200} />
          <Image src="/c-19.webp" width={200} height={200} />
          <Image src="/c-20.webp" width={200} height={200} />
          <Image src="/c-11.webp" width={200} height={200} />
          <Image src="/c-12.webp" width={200} height={200} />
          <Image src="/c-13.webp" width={200} height={200} />
          <Image src="/c-14.webp" width={200} height={200} />
          <Image src="/c-15.webp" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
