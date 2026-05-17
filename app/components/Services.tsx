import { motion } from "motion/react";
import Image from "next/image";
import serviceImage from "@/app/imports/Gemini_Generated_Image_1daqfa1daqfa1daq.png";
import detailImage from "@/app/imports/Gemini_Generated_Image_8m88fp8m88fp8m88.png";
import { servicesData } from "@/app/lib/data";

const featured = servicesData.slice(0, 4);

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
          <div>
            <span className="editorial-label">Featured Service</span>
            <h2 className="mt-5 max-w-[8.5ch] text-balance md:max-w-4xl">
              Sửa ít hơn. Hiểu chiếc xe nhiều hơn.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-muted-foreground md:max-w-xl md:text-lg md:leading-8 lg:justify-self-end">
            <span className="md:hidden">Kiểm tra đúng trước khi thay thế.</span>
            <span className="hidden md:inline">Mỗi hạng mục được bắt đầu bằng kiểm tra cảm giác vận hành, tiếng động, độ rung và dữ liệu kỹ thuật. Việc thay thế chỉ diễn ra khi thật sự cần.</span>
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="image-grain relative -mx-5 h-[62svh] min-h-[28rem] overflow-hidden md:mx-0 md:h-[clamp(20rem,52svh,34rem)] md:min-h-0"
          >
            <Image
              src={serviceImage}
              alt="Khu vực kiểm tra và bảo dưỡng xe"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-between border-y border-border lg:py-0">
            {featured.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="grid grid-cols-[3.75rem_1fr] gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[4.5rem_1fr] md:gap-5 md:py-8"
              >
                <span className="font-display text-[3.4rem] leading-none text-primary/80 md:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.45rem] font-medium leading-tight md:text-2xl">{service.title}</h3>
                  <p className="mt-3 hidden text-sm leading-7 text-muted-foreground md:block">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"
        >
          <div className="max-w-[11ch] border-l border-primary pl-5 md:max-w-none md:pl-8">
            <p className="font-display text-[3.8rem] leading-[0.88] md:text-6xl md:leading-[0.98]">
              Sự tinh tế nằm ở cảm giác sau vô lăng.
            </p>
          </div>
          <div className="image-grain relative -mx-5 h-[48svh] min-h-[22rem] overflow-hidden md:mx-0 md:h-[clamp(18rem,42svh,28rem)] md:min-h-0">
            <Image
              src={detailImage}
              alt="Chi tiết động cơ và thiết bị kiểm tra"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
