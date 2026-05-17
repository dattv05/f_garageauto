import { motion } from "motion/react";
import Image from "next/image";
import storyImage from "@/app/imports/Gemini_Generated_Image_bu8w5sbu8w5sbu8w.png";

export function Reviews() {
  return (
    <section className="bg-secondary py-20 md:py-24">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="image-grain relative -mx-5 h-[56svh] min-h-[26rem] overflow-hidden md:mx-0 md:h-[clamp(20rem,50svh,30rem)] md:min-h-0"
        >
          <Image
            src={storyImage}
            alt="Câu chuyện khách hàng sau khi bảo dưỡng xe"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <span className="editorial-label">Customer Story</span>
          <blockquote className="mt-6 max-w-[10ch] font-display text-[4rem] leading-[0.88] md:max-w-none md:text-6xl md:leading-[0.98]">
            &ldquo;Xe êm hơn, nhưng điều làm tôi nhớ là họ giải thích rất ít và rất đúng.&rdquo;
          </blockquote>
          <div className="mt-10 border-t border-border pt-6">
            <p className="font-semibold">Nguyễn Văn Anh</p>
            <p className="mt-1 text-sm text-muted-foreground">Toyota Camry, bảo dưỡng tổng quát</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
