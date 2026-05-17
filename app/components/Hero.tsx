"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import heroImage from "@/app/imports/image.png";
import { openBookingModal } from "@/app/components/BookingModal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-28 lg:h-[100svh] lg:min-h-[100svh]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 py-7 lg:h-full lg:grid-cols-[0.88fr_1.12fr] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-8 lg:px-8 lg:py-7">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative z-10 px-5 md:px-8 lg:px-0 lg:pt-4"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-primary md:w-16" />
            <span className="editorial-label">Garage Hoàng Phát</span>
          </div>

          <h1 className="mt-5 max-w-[9ch] text-balance text-[clamp(4.4rem,18vw,6.2rem)] leading-[0.84] md:max-w-none md:text-[clamp(3rem,9vw,7.4rem)] md:leading-[0.9]">
            Chăm xe như một tác phẩm cơ khí.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="image-grain relative mx-0 h-[58svh] min-h-[26rem] overflow-hidden sm:h-[62svh] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full lg:min-h-0"
        >
          <Image
            src={heroImage}
            alt="Garage automotive editorial"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,243,239,0.10),rgba(17,17,17,0.10))]" />
          <div className="absolute bottom-5 left-5 max-w-[15rem] bg-background/88 p-4 backdrop-blur-sm md:bottom-6 md:left-6 md:max-w-[18rem] md:p-5">
            <p className="font-display text-[2rem] leading-[0.94] md:text-3xl">
              Cảm giác lái là thứ không nên sửa qua loa.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative z-10 flex flex-col justify-end gap-10 px-5 md:px-8 lg:px-0 lg:pb-4"
        >
          <div>
            <p className="max-w-sm text-[1.02rem] leading-7 text-muted-foreground md:max-w-xl md:text-lg">
              Không chỉ sửa xe. Chúng tôi phục hồi cảm giác lái, độ yên tâm và sự chính xác trong từng chuyển động.
            </p>
            <button
              onClick={openBookingModal}
              className="mt-7 inline-flex h-12 items-center gap-3 border border-primary bg-primary px-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-foreground lg:mt-9"
            >
              Đặt lịch
              <ArrowDownRight data-icon="inline-end" />
            </button>
          </div>

          <div className="grid max-w-xl grid-cols-3 border-y border-border py-4 text-xs leading-5 text-muted-foreground md:text-sm">
            <div>
              <div className="font-display text-[2.35rem] leading-none text-foreground md:text-3xl">10+</div>
              <div className="mt-2">năm tinh chỉnh xe</div>
            </div>
            <div className="border-x border-border px-4 md:px-5">
              <div className="font-display text-[2.35rem] leading-none text-foreground md:text-3xl">5k+</div>
              <div className="mt-2">lượt chăm sóc</div>
            </div>
            <div className="pl-4 md:pl-5">
              <div className="font-display text-[2.35rem] leading-none text-foreground md:text-3xl">98%</div>
              <div className="mt-2">khách quay lại</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
