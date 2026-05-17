"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import { ArrowRight, ChevronDown, X } from "lucide-react";
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

export const openBookingModal = () => {
  window.dispatchEvent(new Event("open-booking-modal"));
};

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("open-booking-modal", handleOpen);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-booking-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success("Đặt lịch thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.");
    setFormData({ name: "", phone: "", date: "", time: "", service: "" });
    setIsOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[220] flex items-end justify-center bg-[#111111]/58 p-0 backdrop-blur-sm md:items-center md:p-5"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ y: 28, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92svh] w-full overflow-y-auto border-t border-border bg-background p-5 shadow-[0_30px_80px_rgba(17,17,17,0.22)] md:max-w-3xl md:border md:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 grid size-10 place-items-center border border-border bg-background/80 text-foreground/70 backdrop-blur-md transition-colors hover:text-primary"
              aria-label="Đóng đặt lịch"
            >
              <X className="size-4" />
            </button>

            <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:gap-10">
              <div className="pr-8">
                <span className="editorial-label">Quick Booking</span>
                <h2 id="booking-modal-title" className="mt-5 max-w-[8ch] text-balance">
                  Chọn giờ. Đến xưởng.
                </h2>
                <p className="mt-6 max-w-xs leading-7 text-muted-foreground">
                  Không cần cuộn xuống. Gửi vài thông tin ngắn để đội kỹ thuật chuẩn bị đúng người và đúng thiết bị.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="modal-booking-name">Họ và tên</FieldLabel>
                      <Input
                        id="modal-booking-name"
                        name="name"
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-none border-border bg-input-background"
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="modal-booking-phone">Số điện thoại</FieldLabel>
                      <Input
                        id="modal-booking-phone"
                        name="phone"
                        type="tel"
                        placeholder="0999 999 999"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-none border-border bg-input-background"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="modal-booking-date">Ngày</FieldLabel>
                      <Input
                        id="modal-booking-date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-none border-border bg-input-background"
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="modal-booking-time">Giờ</FieldLabel>
                      <Input
                        id="modal-booking-time"
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
                    <FieldLabel htmlFor="modal-booking-service">Dịch vụ</FieldLabel>
                    <div className="relative">
                      <select
                        id="modal-booking-service"
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
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
