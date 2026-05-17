"use client";

import { use } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import serviceImage from "@/app/imports/Gemini_Generated_Image_8m88fp8m88fp8m88.png";
import { servicesData } from "@/app/lib/data";

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const service = servicesData.find((s) => s.id === Number(id));

  if (!service) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-background px-5 pt-28">
        <div className="max-w-lg border border-border bg-white p-8 text-center">
          <p className="editorial-label">Not Found</p>
          <h1 className="mt-4 font-display text-5xl leading-none">Dịch vụ không còn ở đây.</h1>
          <p className="mt-5 leading-8 text-muted-foreground">
            Có thể hạng mục này đã được gom vào một quy trình khác.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-3 border border-foreground px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background"
          >
            Quay lại dịch vụ
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-[100svh] bg-background pt-28">
      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-9 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-11">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft />
            Quay lại danh mục dịch vụ
          </Link>
          <span className="editorial-label">{service.shortDescription}</span>
          <h1 className="mt-5 max-w-[9ch] text-balance text-[clamp(4.1rem,16vw,5.4rem)] leading-[0.86] md:max-w-4xl md:text-[clamp(3rem,6.2vw,5.8rem)] md:leading-[0.9]">{service.title}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:justify-self-end"
        >
          <p className="max-w-sm text-base leading-7 text-muted-foreground md:max-w-lg md:text-lg">
            {service.description}
          </p>
          <div className="mt-8 grid grid-cols-2 border-y border-border py-5">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Chi phí</p>
              <p className="mt-2 text-lg font-semibold">{service.price}</p>
            </div>
            <div className="border-l border-border pl-6">
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Thời gian</p>
              <p className="mt-2 text-lg font-semibold">{service.duration}</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] md:px-8">
        <div className="image-grain relative h-[clamp(20rem,50svh,34rem)] overflow-hidden">
          <Image
            src={serviceImage}
            alt={`Dịch vụ ${service.title}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-14 px-5 py-24 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="editorial-label">What happens inside</span>
          <h2 className="mt-5 text-balance">Những việc chúng tôi thật sự kiểm tra.</h2>
        </div>
        <div className="border-t border-border">
          {service.details.map((detail, index) => (
            <motion.div
              key={detail}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="grid grid-cols-[4rem_1fr] gap-5 border-b border-border py-6"
            >
              <span className="font-display text-4xl leading-none text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="leading-8 text-muted-foreground">{detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="editorial-label">Related care</span>
              <h2 className="mt-5 max-w-2xl">Các hạng mục thường đi cùng.</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Đặt lịch kiểm tra
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedServices.map((related, index) => (
              <Link
                key={related.id}
                href={`/services/${related.id}`}
                className="group border border-border bg-background p-6 transition-colors hover:border-primary"
              >
                <span className="font-display text-4xl leading-none text-primary/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-2xl font-medium group-hover:text-primary">{related.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{related.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
