"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import contactImage from "@/app/imports/Gemini_Generated_Image_obap88obap88obap.png";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactItems = [
  {
    title: "Điện thoại",
    lines: ["0912 345 678", "Ưu tiên gọi nếu xe đang có dấu hiệu bất thường."],
  },
  {
    title: "Email",
    lines: ["contact@forgro.com", "Gửi hình ảnh, video tiếng động hoặc lịch sử sửa chữa."],
  },
  {
    title: "Địa chỉ",
    lines: ["123 Đường ABC, TP. Hồ Chí Minh", "Có khu vực tiếp nhận xe và tư vấn nhanh."],
  },
  {
    title: "Giờ làm việc",
    lines: ["Thứ 2 - Thứ 7, 7:30 - 19:00", "Chủ nhật nhận lịch hẹn trước."],
  },
];

const faqs = [
  {
    question: "Tôi chưa biết xe cần sửa gì, có đặt lịch được không?",
    answer: "Được. Hãy mô tả cảm giác lái, tiếng động hoặc đèn cảnh báo. Chúng tôi sẽ bắt đầu bằng kiểm tra thay vì đề xuất sửa ngay.",
  },
  {
    question: "Garage có báo giá trước khi làm không?",
    answer: "Có. Mọi hạng mục đều được giải thích lý do, mức ưu tiên và chi phí trước khi bắt đầu.",
  },
  {
    question: "Có cần để xe lại qua đêm không?",
    answer: "Tùy tình trạng xe. Với bảo dưỡng nhẹ, thường có thể hoàn tất trong ngày. Các lỗi sâu sẽ được hẹn thời gian rõ ràng.",
  },
  {
    question: "Tôi có thể gửi hình ảnh hoặc video trước không?",
    answer: "Nên gửi. Một đoạn video tiếng động hoặc ảnh cảnh báo giúp kỹ thuật viên chuẩn bị đúng thiết bị hơn.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-[100svh] bg-background pt-28">
      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-9 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:py-11">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="editorial-label">Visit The Garage</span>
          <h1 className="mt-5 max-w-[9ch] text-balance text-[clamp(4.1rem,16vw,5.4rem)] leading-[0.86] md:max-w-4xl md:text-[clamp(3rem,6.2vw,5.8rem)] md:leading-[0.9]">
            Hãy kể chiếc xe đang khác đi như thế nào.
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-sm text-base leading-7 text-muted-foreground md:max-w-lg md:text-lg lg:justify-self-end"
        >
          <span className="md:hidden">Một cuộc hẹn tốt bắt đầu bằng vài chi tiết thật.</span>
          <span className="hidden md:inline">Một cuộc hẹn tốt bắt đầu bằng vài chi tiết thật: xe rung khi nào, tiếng động đến từ đâu, đèn báo xuất hiện bao lâu.</span>
        </motion.p>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-10 pb-24 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="image-grain relative h-[58svh] min-h-[27rem] overflow-hidden md:h-[clamp(20rem,52svh,34rem)] md:min-h-0"
        >
          <Image
            src={contactImage}
            alt="Không gian tiếp nhận xe tại garage"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 max-w-sm bg-background/88 p-5 backdrop-blur-sm">
            <p className="font-display text-4xl leading-[0.96]">
              Đến xưởng với một dấu hiệu. Rời đi với một hướng xử lý rõ.
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="mx-5 border-y border-border bg-white py-6 md:mx-0 md:border md:p-8"
        >
          <div className="mb-8">
            <span className="editorial-label">Send a note</span>
            <h2 className="mt-4 text-balance">Để lại thông tin.</h2>
            {submitted && (
              <p className="mt-5 border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
                Cảm ơn bạn. Xưởng sẽ phản hồi sớm với hướng kiểm tra phù hợp.
              </p>
            )}
          </div>

          <FieldGroup>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="contact-name">Tên của bạn</FieldLabel>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Nguyễn Văn A"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-none border-border bg-input-background"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="contact-phone">Số điện thoại</FieldLabel>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="0912 345 678"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 rounded-none border-border bg-input-background"
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="contact-email">Email</FieldLabel>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 rounded-none border-border bg-input-background"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact-subject">Chiếc xe / vấn đề chính</FieldLabel>
              <Input
                id="contact-subject"
                name="subject"
                placeholder="Ví dụ: Mazda 3 bị rung khi phanh"
                value={formData.subject}
                onChange={handleChange}
                required
                className="h-12 rounded-none border-border bg-input-background"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact-message">Mô tả thêm</FieldLabel>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Xe bắt đầu có dấu hiệu từ khi nào, đã kiểm tra ở đâu chưa, có đèn cảnh báo nào không..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="min-h-36 rounded-none border-border bg-input-background"
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              className="h-12 rounded-none bg-primary text-primary-foreground hover:bg-foreground"
            >
              Gửi cho xưởng
              <ArrowRight data-icon="inline-end" />
            </Button>
          </FieldGroup>
        </motion.form>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="editorial-label">How to reach us</span>
            <h2 className="mt-5 text-balance">Thông tin xưởng.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {contactItems.map((item) => (
              <div key={item.title} className="border-t border-border pt-5">
                <h3 className="text-2xl font-medium">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="mt-3 leading-7 text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <div className="mb-12">
            <span className="editorial-label">Before you visit</span>
            <h2 className="mt-5 max-w-3xl text-balance">Một vài câu hỏi thường gặp.</h2>
          </div>
          <div className="border-t border-border">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid gap-4 border-b border-border py-7 md:grid-cols-[0.8fr_1.2fr]"
              >
                <h3 className="text-2xl font-medium">{faq.question}</h3>
                <p className="leading-8 text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
