import { motion } from "motion/react";

const steps = [
  {
    title: "Lắng nghe",
    description: "Ghi nhận cảm giác lái, tiếng động, thói quen sử dụng và lịch sử bảo dưỡng.",
  },
  {
    title: "Kiểm tra",
    description: "Đọc lỗi, kiểm tra cơ khí, chạy thử và phân tách nguyên nhân thật.",
  },
  {
    title: "Đề xuất",
    description: "Nói rõ thứ cần làm ngay, thứ có thể chờ và chi phí trước khi sửa.",
  },
  {
    title: "Hoàn thiện",
    description: "Sửa chữa, kiểm tra lại và bàn giao với cảm giác vận hành đã được xác nhận.",
  },
];

export function Process() {
  return (
    <section className="bg-[#111111] py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-24 lg:h-fit"
        >
          <span className="editorial-label">Process</span>
          <h2 className="mt-5 max-w-[8.5ch] text-balance md:max-w-xl">
            Chậm ở bước đầu, nhanh ở kết quả.
          </h2>
          <p className="mt-7 max-w-sm leading-7 text-white/62 md:mt-8 md:max-w-md md:leading-8">
            <span className="md:hidden">Ít bước, rõ nguyên nhân, không đoán mò.</span>
            <span className="hidden md:inline">Quy trình được giữ gọn để bạn hiểu chiếc xe đang cần gì, không phải nghe một danh sách sửa chữa dài vô nghĩa.</span>
          </p>
        </motion.div>

        <div className="border-l border-white/18">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative border-b border-white/14 py-9 pl-8 md:grid md:grid-cols-[10rem_1fr] md:gap-12 md:py-12 md:pl-16"
            >
              <span className="absolute -left-[0.4rem] top-11 size-3 bg-primary md:-left-[0.45rem] md:top-14" />
              <div className="font-display text-[4.5rem] leading-none text-white/32 md:text-6xl">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="mt-2 text-[2rem] font-medium leading-tight md:mt-0 md:text-3xl">{step.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-white/62 md:leading-8">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
