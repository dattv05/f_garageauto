"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Instagram, Mail, MapPin, Menu, Music2, Phone, Send, X, Youtube } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { blogPostsData, servicesData } from "@/app/lib/data";
import { openBookingModal } from "@/app/components/BookingModal";

export const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Liên hệ", href: "/contact" },
];

const contactLinks = [
  { label: "0999 999 999", href: "tel:0999999999", icon: Phone },
  { label: "0999999999", href: "https://zalo.me/0999999999", icon: Send },
  { label: "hoangphatauto@gmail.com", href: "mailto:hoangphatauto@gmail.com", icon: Mail },
  { label: "23, Đức Hòa, Tỉnh Tây Ninh", href: "/contact", icon: MapPin },
];

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com", icon: Music2 },
  { label: "YouTube", href: "https://www.youtube.com", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "Telegram", href: "https://t.me", icon: Send },
];

const serviceMenuItems = servicesData.slice(0, 6).map((service) => ({
  label: service.title,
  href: `/services/${service.id}`,
}));

const blogMenuItems = blogPostsData.slice(0, 5).map((post) => ({
  label: post.title,
  href: `/blog/${post.slug}`,
}));

const dropdownMenus = {
  "/services": {
    eyebrow: "Dịch vụ",
    statement: "Không chỉ sửa chữa. Chúng tôi phục hồi cảm giác lái.",
    items: serviceMenuItems,
    allHref: "/services",
    allLabel: "Xem tất cả dịch vụ",
  },
  "/blog": {
    eyebrow: "Journal",
    statement: "Ghi chép nhỏ từ xưởng cho những người muốn hiểu chiếc xe của mình.",
    items: blogMenuItems,
    allHref: "/blog",
    allLabel: "Xem tất cả bài viết",
  },
} as const;

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${isScrolled
          ? "border-border bg-background/92 backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-sm"
        }`}
    >
      <AnimatePresence initial={false}>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 32, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border/70 bg-background/84 backdrop-blur-md"
          >
            <div className="mx-auto flex h-8 max-w-[1440px] items-center justify-between gap-4 px-5 text-[0.72rem] text-muted-foreground md:px-8">
              <div className="flex min-w-0 items-center gap-4">
                {contactLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`group hidden min-w-0 items-center gap-1.5 transition-colors hover:text-primary ${index === 0 ? "flex" : "lg:flex"
                        }`}
                    >
                      <Icon className="size-3.5 shrink-0 stroke-[1.8]" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-1.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="grid size-7 place-items-center rounded-full border border-border/70 bg-background/55 text-foreground/70 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-background hover:text-primary"
                    >
                      <Icon className="size-3.5 stroke-[1.7]" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Garage Auto Hoang Phat" className="font-display text-[1.7rem] leading-none md:text-2xl">
          ForGro Auto
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Điều hướng chính">
          {navLinks.map((link) => {
            const dropdown = dropdownMenus[link.href as keyof typeof dropdownMenus];

            if (!dropdown) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div key={link.href} className="group relative py-7">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 text-sm transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                  <ChevronDown className="size-3.5 stroke-[1.7] transition-transform duration-300 group-hover:rotate-180" />
                </Link>

                <div className="pointer-events-none absolute left-1/2 top-full w-[42rem] -translate-x-1/2 translate-y-2 border border-border bg-background/96 p-7 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="grid grid-cols-[1.1fr_0.9fr] gap-10">
                    <div>
                      <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
                        <span className="editorial-label">{dropdown.eyebrow}</span>
                        <Link
                          href={dropdown.allHref}
                          className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
                        >
                          {dropdown.allLabel}
                        </Link>
                      </div>

                      <div className="grid gap-3">
                        {dropdown.items.map((item, index) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group/item grid grid-cols-[2.6rem_1fr] items-baseline gap-3 border-b border-border/70 pb-3 text-foreground transition-colors last:border-b-0 last:pb-0 hover:text-primary"
                          >
                            <span className="font-display text-2xl leading-none text-primary/62">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[0.98rem] leading-snug underline-offset-4 group-hover/item:underline">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between border-l border-border pl-8">
                      <p className="font-display text-[2.4rem] leading-[0.92] text-foreground">
                        {dropdown.statement}
                      </p>
                      <p className="mt-8 max-w-[15rem] text-sm leading-6 text-muted-foreground">
                        Ít lựa chọn hơn, rõ tiêu chuẩn hơn. Mỗi hạng mục bắt đầu bằng một lần lắng nghe chiếc xe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={openBookingModal}
          className="hidden border border-foreground px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background md:inline-flex"
        >
          Đặt lịch
        </button>

        <button
          className="grid size-10 place-items-center md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
            aria-label="Điều hướng mobile"
          >
            <div className="flex min-h-[calc(100svh-7rem)] flex-col justify-between px-5 py-8">
              <div className="flex flex-col">
                {navLinks.map((link, index) => {
                  const dropdown = dropdownMenus[link.href as keyof typeof dropdownMenus];

                  if (!dropdown) {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`grid grid-cols-[2.4rem_1fr] items-baseline gap-3 border-b border-border py-5 ${isActive(link.href) ? "text-primary" : "text-foreground"
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="font-display text-2xl leading-none text-primary/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[3.5rem] leading-[0.9]">
                          {link.label}
                        </span>
                      </Link>
                    );
                  }

                  const isExpanded = expandedMobileMenu === link.href;

                  return (
                    <div key={link.href} className="border-b border-border py-5">
                      <button
                        type="button"
                        onClick={() => setExpandedMobileMenu(isExpanded ? null : link.href)}
                        className={`grid w-full grid-cols-[2.4rem_1fr_auto] items-baseline gap-3 text-left ${isActive(link.href) ? "text-primary" : "text-foreground"
                          }`}
                        aria-expanded={isExpanded}
                      >
                        <span className="font-display text-2xl leading-none text-primary/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[3.5rem] leading-[0.9]">
                          {link.label}
                        </span>
                        <ChevronDown className={`mt-3 size-5 self-start transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 grid gap-4 pl-[3.2rem]">
                              {dropdown.items.slice(0, 4).map((item, childIndex) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="grid grid-cols-[2rem_1fr] gap-3 text-foreground/76 transition-colors hover:text-primary"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <span className="font-display text-xl leading-none text-primary/60">
                                    {String(childIndex + 1).padStart(2, "0")}
                                  </span>
                                  <span className="text-lg leading-tight">{item.label}</span>
                                </Link>
                              ))}
                              <Link
                                href={dropdown.allHref}
                                className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdown.allLabel}
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="mt-8 border border-primary bg-primary px-4 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground"
              >
                Đặt lịch
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
