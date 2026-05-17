import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const serviceOptions = [
  { value: "oil-change", label: "Thay dầu động cơ" },
  { value: "engine-repair", label: "Sửa chữa động cơ" },
  { value: "electrical", label: "Hệ thống điện" },
  { value: "maintenance", label: "Bảo dưỡng định kỳ" },
  { value: "tires", label: "Lốp xe & cân bằng" },
  { value: "diagnostic", label: "Chẩn đoán vi tính" },
  { value: "other", label: "Khác" },
];

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Đặt lịch thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.");
    setFormData({ name: "", phone: "", date: "", time: "", service: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="bg-background py-20 md:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="editorial-label">Booking</span>
          <h2 className="mt-5 max-w-[9ch] text-balance md:max-w-none">
            Đặt một khung giờ. Chúng tôi lo phần còn lại.
          </h2>
          <p className="mt-7 max-w-sm leading-7 text-muted-foreground md:mt-8 md:max-w-md md:leading-8">
            <span className="md:hidden">Chọn giờ. Đến xưởng. Phần còn lại để chúng tôi chuẩn bị.</span>
            <span className="hidden md:inline">Form chỉ lấy thông tin cần thiết để đội kỹ thuật chuẩn bị đúng người, đúng thiết bị và đúng thời gian.</span>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          onSubmit={handleSubmit}
          className="border-y border-border bg-white py-6 md:border md:p-8"
        >
          <FieldGroup>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="booking-name">Họ và tên</FieldLabel>
                <Input
                  id="booking-name"
                  name="name"
                  placeholder="Nguyễn Văn A"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-none border-border bg-input-background"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="booking-phone">Số điện thoại</FieldLabel>
                <Input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  placeholder="0912 345 678"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-none border-border bg-input-background"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="booking-date">Ngày</FieldLabel>
                <Input
                  id="booking-date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-none border-border bg-input-background"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="booking-time">Giờ</FieldLabel>
                <Input
                  id="booking-time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-none border-border bg-input-background"
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="booking-service">Dịch vụ</FieldLabel>
              <div className="relative">
                <select
                  id="booking-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="h-12 w-full appearance-none rounded-none border border-border bg-input-background px-3 pr-10 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20"
                >
                  <option value="">Chọn dịch vụ</option>
                  {serviceOptions.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            <Button
              type="submit"
              size="lg"
              className="mt-2 h-12 w-full rounded-none bg-primary text-primary-foreground hover:bg-foreground"
            >
              Gửi yêu cầu đặt lịch
              <ArrowRight data-icon="inline-end" />
            </Button>
          </FieldGroup>
        </motion.form>
      </div>
    </section>
  );
}
