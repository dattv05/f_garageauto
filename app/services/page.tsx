"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import serviceImage from "@/app/imports/Gemini_Generated_Image_6kk6uz6kk6uz6kk6.png";
import detailImage from "@/app/imports/Gemini_Generated_Image_y06le1y06le1y06l.png";
import { servicesData } from "@/app/lib/data";

export default function ServicesPage() {
  return (
    <div className="min-h-[100svh] bg-background pt-28">
      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-9 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-11">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="editorial-label">Service Atelier</span>
          <h1 className="mt-5 max-w-[9ch] text-balance text-[clamp(4.1rem,16vw,5.4rem)] leading-[0.86] md:max-w-4xl md:text-[clamp(3rem,6.2vw,5.8rem)] md:leading-[0.9]">
            Những can thiệp vừa đủ để chiếc xe trở lại đúng cảm giác.
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-sm text-base leading-7 text-muted-foreground md:max-w-lg md:text-lg lg:justify-self-end"
        >
          <span className="md:hidden">Đọc chiếc xe trước. Chỉ sửa phần làm cảm giác lái lệch đi.</span>
          <span className="hidden md:inline">Chúng tôi không bán một danh sách hạng mục. Chúng tôi đọc chiếc xe, giữ lại phần đang đúng và chỉ sửa phần làm cảm giác vận hành lệch đi.</span>
        </motion.p>
      </section>

      <section className="mx-auto max-w-[1440px] md:px-8">
        <div className="image-grain relative h-[clamp(20rem,50svh,34rem)] overflow-hidden">
          <Image
            src={serviceImage}
            alt="Không gian dịch vụ garage theo phong cách editorial"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 max-w-sm bg-background/88 p-5 backdrop-blur-sm">
            <p className="font-display text-4xl leading-[0.96]">
              Đừng sửa xe bằng sự vội vàng.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-16 px-5 py-24 md:px-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <span className="editorial-label">Menu of Care</span>
          <h2 className="mt-5 text-balance">Dịch vụ được viết ngắn. Công việc ở trong xưởng thì kỹ hơn.</h2>
        </div>

        <div className="border-t border-border">
          {servicesData.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="group grid gap-5 border-b border-border py-8 md:grid-cols-[5rem_1fr_auto] md:items-start"
            >
              <span className="font-display text-5xl leading-none text-primary/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <Link href={`/services/${service.id}`} className="inline-block">
                  <h3 className="text-3xl font-medium transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                </Link>
                <p className="mt-3 max-w-2xl leading-8 text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{service.price}</span>
                  <span className="text-border">/</span>
                  <span>{service.duration}</span>
                </div>
              </div>
              <Link
                href={`/services/${service.id}`}
                className="inline-flex size-11 items-center justify-center border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                aria-label={`Xem ${service.title}`}
              >
                <ArrowUpRight />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] py-20 text-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="image-grain relative h-[clamp(18rem,42svh,28rem)] overflow-hidden">
            <Image
              src={detailImage}
              alt="Chi tiết kiểm tra kỹ thuật ô tô"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="editorial-label">Need a second look?</span>
            <p className="mt-6 font-display text-5xl leading-[0.98] md:text-6xl">
              Nếu bạn chưa chắc xe cần gì, hãy bắt đầu bằng một buổi kiểm tra.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 border border-white/30 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#111111]"
            >
              Trao đổi với xưởng
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
