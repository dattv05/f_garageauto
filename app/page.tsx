'use client';

import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { BrandScroller } from "@/app/components/BrandScroller";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { Process } from "@/app/components/Process";
import { Booking } from "@/app/components/Booking";
import { Reviews } from "@/app/components/Reviews";
import { Gallery } from "@/app/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandScroller />
      <Services />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Reviews />
      <Booking />
    </>
  );
}
