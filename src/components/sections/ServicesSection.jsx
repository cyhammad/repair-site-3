"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ServicesSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex h-full w-full flex-col py-10">
      <h2 className="mx-auto max-w-7xl pl-4 text-center text-xl font-bold md:text-5xl">
        Our Services
      </h2>
      <span className="text-center text-lg text-black/80">
        We provide a wide range of services to our customers.
      </span>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14"
          >
            <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/b-1.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="mx-auto h-full w-full object-contain md:h-1/2 md:w-1/2"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "We provide",
    title: "Washing Machine Repair",
    src: "/w.jpeg",
    content: <DummyContent />,
  },
  {
    category: "We provide",
    title: "Refrigerator Repair",
    src: "/f.jpeg",
    content: <DummyContent />,
  },
  {
    category: "We provide",
    title: "Dishwasher Repair",
    src: "/ds.jpeg",
    content: <DummyContent />,
  },
  {
    category: "We provide",
    title: "Dryer Repair",
    src: "/d.jpeg",
    content: <DummyContent />,
  },
  {
    category: "We provide",
    title: "TV Repair",
    src: "/t.jpeg",
    content: <DummyContent />,
  },
  {
    category: "We provide",
    title: "Gas Oven Repair",
    src: "/o.jpeg",
    content: <DummyContent />,
  },
  {
    category: "We provide",
    title: "Stove / Cooker Repair",
    src: "/s.jpg",
    content: <DummyContent />,
  },
];
