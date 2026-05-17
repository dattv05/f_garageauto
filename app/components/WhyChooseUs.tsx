import { motion } from "motion/react";
import Image from "next/image";
import workshopImage from "@/app/imports/Gemini_Generated_Image_obap88obap88obap.png";

const notes = [
  "Nghe xe trước khi chạm vào xe.",
  "Báo giá ngắn gọn, lý do rõ ràng.",
  "Giữ lại cảm giác nguyên bản nếu chiếc xe vẫn đang đúng.",
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <span className="editorial-label">Philosophy</span>
          <p className="mt-6 max-w-[9ch] font-display text-[4rem] leading-[0.88] md:max-w-none md:text-7xl md:leading-[0.98]">
            Một garage tốt không làm chiếc xe mất đi tính cách của nó.
          </p>
          <div className="mt-10 border-y border-border md:mt-12">
            {notes.map((note, index) => (
              <div
                key={note}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-border py-5 last:border-b-0 md:grid-cols-[3rem_1fr]"
              >
                <span className="font-display text-[2.4rem] leading-none text-primary md:text-3xl">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-muted-foreground md:text-lg">{note}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="image-grain relative order-1 -mx-5 h-[64svh] min-h-[30rem] overflow-hidden md:mx-0 md:h-[clamp(20rem,58svh,38rem)] md:min-h-0 lg:order-2"
        >
          <Image
            src={workshopImage}
            alt="Không gian garage sáng và tối giản"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
