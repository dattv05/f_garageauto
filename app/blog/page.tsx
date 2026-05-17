"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import blogImage from "@/app/imports/Gemini_Generated_Image_zhv6w0zhv6w0zhv6.png";
import { blogPostsData } from "@/app/lib/data";

export default function BlogPage() {
  const [featuredPost, ...posts] = blogPostsData;

  return (
    <div className="min-h-[100svh] bg-background pt-28">
      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-9 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-11">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="editorial-label">Garage Journal</span>
          <h1 className="mt-5 max-w-[9ch] text-balance text-[clamp(4.1rem,16vw,5.4rem)] leading-[0.86] md:max-w-4xl md:text-[clamp(3rem,6.2vw,5.8rem)] md:leading-[0.9]">
            Ghi chép nhỏ cho những người muốn hiểu chiếc xe của mình.
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-sm text-base leading-7 text-muted-foreground md:max-w-lg md:text-lg lg:justify-self-end"
        >
          <span className="md:hidden">Quan sát thực tế từ xưởng, viết cho người lái.</span>
          <span className="hidden md:inline">Ít mẹo vặt ồn ào, nhiều quan sát thực tế: bảo dưỡng, tiếng động lạ, cảm giác lái và những dấu hiệu nên được chú ý sớm.</span>
        </motion.p>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pb-20 md:px-8">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="grid gap-8 border-y border-border py-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
        >
          <Link href={`/blog/${featuredPost.slug}`} className="image-grain relative h-[clamp(18rem,44svh,28rem)] overflow-hidden">
            <Image
              src={blogImage}
              alt={featuredPost.title}
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.025]"
            />
          </Link>
          <div className="lg:pl-8">
            <span className="editorial-label">{featuredPost.category}</span>
            <Link href={`/blog/${featuredPost.slug}`}>
              <h2 className="mt-5 text-balance transition-colors hover:text-primary">
                {featuredPost.title}
              </h2>
            </Link>
            <p className="mt-6 max-w-xl leading-8 text-muted-foreground">{featuredPost.excerpt}</p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>{featuredPost.author}</span>
              <span className="text-border">/</span>
              <span>{new Date(featuredPost.date).toLocaleDateString("vi-VN")}</span>
            </div>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 pb-24 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="editorial-label">Recent Notes</span>
            <h2 className="mt-5 max-w-2xl">Bài viết mới từ xưởng.</h2>
          </div>
          <p className="max-w-sm leading-7 text-muted-foreground">
            Đọc chậm một chút. Có những dấu hiệu nhỏ giúp bạn tránh một lần sửa lớn.
          </p>
        </div>

        <div className="border-t border-border">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group grid gap-5 border-b border-border py-8 md:grid-cols-[7rem_1fr_auto] md:items-start"
            >
              <div className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("vi-VN")}
              </div>
              <div>
                <span className="editorial-label">{post.category}</span>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="mt-3 text-3xl font-medium transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-3 max-w-2xl leading-8 text-muted-foreground">{post.excerpt}</p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex size-11 items-center justify-center border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                aria-label={`Đọc ${post.title}`}
              >
                <ArrowUpRight />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
