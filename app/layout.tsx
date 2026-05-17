import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FloatingActions } from "@/app/components/FloatingActions";
import { BookingModal } from "@/app/components/BookingModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trang chủ - Garage Auto Hoang Phat - Sửa chữa ô tô uy tín tại Ho Chí Minh",
  description: "Chuyên cung cấp dịch vụ sửa chữa ô tô uy tín tại Ho Chí Minh. Đảm bảo chất lượng và giá cả hợp lý cho khách hàng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className="h-full antialiased scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <BookingModal />
        <Toaster richColors />
      </body>
    </html>
  );
}
