'use client';

import { motion } from "motion/react";

const brands = [
  "Toyota",
  "Ford",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Honda",
  "Hyundai",
  "Mazda",
  "Lexus",
  "Porsche",
  "Land Rover",
  "VinFast",
];

export function BrandScroller() {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-5 md:py-8">
      <motion.div
        animate={{ x: [0, -980] }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="flex min-w-max items-center gap-8 whitespace-nowrap md:gap-12"
      >
        {duplicatedBrands.map((brand, index) => (
          <span
            key={`${brand}-${index}`}
            className="font-display text-[2.55rem] leading-none text-foreground/40 md:text-5xl"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
