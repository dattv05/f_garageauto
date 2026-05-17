import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import Image from "next/image";
import img1 from "@/app/imports/Gemini_Generated_Image_1daqfa1daqfa1daq.png";
import img2 from "@/app/imports/Gemini_Generated_Image_6kk6uz6kk6uz6kk6.png";
import img3 from "@/app/imports/Gemini_Generated_Image_8m88fp8m88fp8m88.png";
import img4 from "@/app/imports/Gemini_Generated_Image_bu8w5sbu8w5sbu8w.png";
import img5 from "@/app/imports/Gemini_Generated_Image_y06le1y06le1y06l.png";
import img6 from "@/app/imports/Gemini_Generated_Image_zhv6w0zhv6w0zhv6.png";

const images = [
  { src: img1, title: "Workshop light", className: "md:col-span-2 md:row-span-2" },
  { src: img2, title: "Diagnostic bench", className: "" },
  { src: img3, title: "Engine detail", className: "" },
  { src: img4, title: "Service bay", className: "md:row-span-2" },
  { src: img5, title: "Electrical check", className: "" },
  { src: img6, title: "Final inspection", className: "md:col-span-2" },
];

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<typeof images[0] | null>(null);

  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-12 grid gap-7 md:mb-14 md:grid-cols-[0.8fr_1.2fr] md:items-end"
        >
          <div>
            <span className="editorial-label">Gallery</span>
            <h2 className="mt-5 max-w-[9ch] text-balance md:max-w-none">Một vài khoảnh khắc trong xưởng.</h2>
          </div>
          <p className="max-w-sm leading-7 text-muted-foreground md:max-w-xl md:leading-8 md:justify-self-end">
            <span className="md:hidden">Ánh sáng thật. Bề mặt thật. Chi tiết thật.</span>
            <span className="hidden md:inline">Không cần trình diễn quá nhiều. Chỉ cần ánh sáng thật, bề mặt thật và những chi tiết cho thấy xe được đối xử cẩn thận.</span>
          </p>
        </motion.div>

        <div className="-mx-5 grid auto-rows-[58svh] grid-cols-1 gap-3 md:mx-0 md:grid-cols-4 md:auto-rows-[220px] md:gap-4">
          {images.map((img, index) => (
            <motion.button
              key={img.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              onClick={() => setSelectedImg(img)}
              className={`image-grain group relative overflow-hidden text-left ${index > 3 ? "hidden md:block" : ""} ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <span className="absolute bottom-4 left-4 bg-background/86 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                {img.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#111111]/92 p-5"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[86vh] w-full max-w-6xl overflow-hidden bg-black"
            >
              <Image
                src={selectedImg.src}
                alt={selectedImg.title}
                sizes="100vw"
                className="max-h-[86vh] w-full object-contain"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute right-4 top-4 grid size-10 place-items-center bg-background text-foreground"
                aria-label="Đóng ảnh"
              >
                <X />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
