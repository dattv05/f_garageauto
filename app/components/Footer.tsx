"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks } from "@/app/components/Header";
import { servicesData } from "@/app/lib/data";
import { openBookingModal } from "@/app/components/BookingModal";

const footerServices = servicesData.slice(0, 5);

const mapSrc =
  "https://www.google.com/maps?q=23%20%C4%90%E1%BB%A9c%20H%C3%B2a%2C%20T%C3%A2y%20Ninh&output=embed";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
          <div>
            <Link href="/" className="font-display text-4xl leading-none">
              ForGro Auto
            </Link>
            <p className="mt-8 max-w-[11ch] font-display text-[4rem] leading-[0.88] md:max-w-[13ch] md:text-7xl md:leading-[0.9]">
              Không chỉ sửa chữa. Chúng tôi giữ lại cảm giác lái nguyên bản.
            </p>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="editorial-label">Visit The Garage</p>
            <p className="mt-5 leading-8 text-muted-foreground">
              Một điểm đến đủ tĩnh để lắng nghe chiếc xe, đủ chính xác để trả nó về đúng cảm giác.
            </p>
            <button
              type="button"
              onClick={openBookingModal}
              className="mt-8 inline-flex items-center gap-3 border border-foreground px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background"
            >
              Đặt lịch
              <ArrowUpRight data-icon="inline-end" />
            </button>
          </div>
        </div>

        <div className="grid gap-12 border-b border-border py-14 md:grid-cols-3">
          <div>
            <h3 className="editorial-label">Navigation</h3>
            <nav className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="editorial-label">Dịch vụ</h3>
            <nav className="mt-6 flex flex-col gap-3">
              {footerServices.map((service, index) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group grid w-fit grid-cols-[2rem_1fr] gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="font-display text-xl leading-none text-primary/62">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="underline-offset-4 group-hover:underline">{service.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="editorial-label">Liên hệ</h3>
            <div className="mt-6 flex flex-col gap-3 text-sm leading-7 text-muted-foreground">
              <span>23, Đức Hòa, Tỉnh Tây Ninh</span>
              <a href="tel:0999999999" className="w-fit transition-colors hover:text-primary">
                0999 999 999
              </a>
              <a href="mailto:hoangphatauto@gmail.com" className="w-fit transition-colors hover:text-primary">
                hoangphatauto@gmail.com
              </a>
              <span>Thứ 2 - Thứ 7 / 7:30 - 19:00</span>
            </div>
          </div>
        </div>

        <div className="py-14">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="editorial-label">Find Us</p>
              <h2 className="mt-4 max-w-[9ch] text-balance md:max-w-none">Đường đến xưởng.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Bản đồ chỉ giữ đúng chức năng của nó: giúp bạn biết đây là một địa điểm thật.
            </p>
          </div>

          <div className="h-[220px] overflow-hidden border border-border bg-secondary md:h-[320px]">
            <iframe
              title="ForGro Auto location map"
              src={mapSrc}
              className="h-full w-full grayscale saturate-[0.72] contrast-[0.94]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 ForGro Auto Garage. All rights reserved.</p>
          <p>Automotive care with precision and restraint.</p>
        </div>
      </div>
    </footer>
  );
}
