"use client";

import { useEffect, useState } from "react";
import { Bot, CalendarClock, ChevronUp, Phone } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { openBookingModal } from "@/app/components/BookingModal";

type FloatingAction =
  | {
      label: string;
      hint: string;
      href: string;
      icon: typeof Bot;
      action?: never;
    }
  | {
      label: string;
      hint: string;
      action: "booking";
      icon: typeof Bot;
      href?: never;
    };

const actions: FloatingAction[] = [
  {
    label: "Mini garage assistant",
    hint: "Tư vấn nhanh",
    href: "/contact",
    icon: Bot,
  },
  {
    label: "Đặt lịch nhanh",
    hint: "Đặt lịch",
    action: "booking",
    icon: CalendarClock,
  },
  {
    label: "Gọi hotline",
    hint: "Hotline",
    href: "tel:0363113986",
    icon: Phone,
  },
];

export function FloatingActions() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
      className="fixed bottom-5 right-4 z-40 flex flex-col items-center gap-3 md:bottom-7 md:right-7"
    >
      <div className="relative overflow-hidden rounded-full border border-white/18 bg-[#111111]/72 p-1.5 text-white shadow-[0_18px_55px_rgba(17,17,17,0.18)] backdrop-blur-xl">
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02)_38%,rgba(182,70,47,0.14))]" />
        <div className="relative flex flex-col gap-1.5">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <div key={action.label} className="group relative">
                {action.href ? (
                  <Link
                    href={action.href}
                    aria-label={action.label}
                    className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/82 transition-all duration-300 hover:scale-[1.045] hover:bg-white/[0.13] hover:text-white focus-visible:scale-[1.045]"
                  >
                    <Icon className="size-4 stroke-[1.7] transition-opacity duration-300 group-hover:opacity-90" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={openBookingModal}
                    aria-label={action.label}
                    className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/82 transition-all duration-300 hover:scale-[1.045] hover:bg-white/[0.13] hover:text-white focus-visible:scale-[1.045]"
                  >
                    <Icon className="size-4 stroke-[1.7] transition-opacity duration-300 group-hover:opacity-90" />
                  </button>
                )}
                <span className="pointer-events-none absolute right-[calc(100%+0.7rem)] top-1/2 -translate-y-1/2 whitespace-nowrap border border-white/12 bg-[#111111]/78 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/84 opacity-0 shadow-[0_14px_35px_rgba(17,17,17,0.18)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 group-focus-within:-translate-x-1 group-focus-within:opacity-100">
                  <span className="md:hidden">{action.hint}</span>
                  <span className="hidden md:inline">{action.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="group relative">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
          className="relative grid size-11 place-items-center rounded-full border border-border/70 bg-background/72 text-foreground/80 backdrop-blur-xl transition-all duration-300 hover:scale-[1.045] hover:text-primary focus-visible:scale-[1.045]"
        >
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(var(--primary) ${scrollProgress * 360}deg, rgba(17,17,17,0.12) 0deg)`,
              mask: "radial-gradient(circle, transparent 58%, #000 60%)",
              WebkitMask: "radial-gradient(circle, transparent 58%, #000 60%)",
            }}
          />
          <ChevronUp className="relative size-4 stroke-[1.8]" />
        </button>
        <span className="pointer-events-none absolute right-[calc(100%+0.7rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap border border-border/70 bg-background/78 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground/78 opacity-0 shadow-[0_14px_35px_rgba(17,17,17,0.12)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 group-focus-within:-translate-x-1 group-focus-within:opacity-100 md:block">
          Lên đầu trang
        </span>
      </div>
    </motion.div>
  );
}
