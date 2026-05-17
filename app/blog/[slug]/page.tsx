"use client";

import { use } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPostsData } from "@/app/lib/data";

function renderPostContent(content: string) {
  return content
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("## ")) {
        return `<h2 class="font-display text-5xl leading-[0.98] text-foreground mt-14 mb-6">${trimmed.replace("## ", "")}</h2>`;
      }
      if (trimmed.startsWith("### ")) {
        return `<h3 class="text-2xl font-medium text-foreground mt-10 mb-4">${trimmed.replace("### ", "")}</h3>`;
      }
      if (trimmed === "") {
        return "";
      }
      return `<p class="mb-5 leading-8 text-muted-foreground">${trimmed}</p>`;
    })
    .join("");
}

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-background px-5 pt-28">
        <div className="max-w-lg border border-border bg-white p-8 text-center">
          <p className="editorial-label">Not Found</p>
          <h1 className="mt-4 font-display text-5xl leading-none">Bài viết đã rời gara.</h1>
          <p className="mt-5 leading-8 text-muted-foreground">
            Có thể nội dung đã được cập nhật hoặc chuyển sang một ghi chép khác.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-3 border border-foreground px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background"
          >
            Quay lại journal
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPostsData.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-[100svh] bg-background pt-28">
      <section className="mx-auto max-w-[1120px] px-5 py-9 md:px-8 lg:py-11">
        <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft />
          Quay lại journal
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-border pb-12"
        >
          <span className="editorial-label">{post.category}</span>
          <h1 className="mt-5 max-w-[9ch] text-balance text-[clamp(4.1rem,16vw,5.4rem)] leading-[0.86] md:max-w-5xl md:text-[clamp(3rem,6.2vw,5.8rem)] md:leading-[0.9]">{post.title}</h1>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span className="text-border">/</span>
            <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-14 px-5 pb-28 md:px-8 lg:grid-cols-[1fr_18rem]">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="max-w-3xl"
          dangerouslySetInnerHTML={{ __html: renderPostContent(post.content) }}
        />

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="border-y border-border py-6">
            <p className="editorial-label">Keep Reading</p>
            <div className="mt-5 flex flex-col gap-5">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.slug}`} className="group border-b border-border pb-5 last:border-b-0">
                  <p className="text-sm text-muted-foreground">
                    {new Date(related.date).toLocaleDateString("vi-VN")}
                  </p>
                  <h3 className="mt-2 text-lg font-medium leading-snug transition-colors group-hover:text-primary">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary"
          >
            Hỏi xưởng về xe của bạn
            <ArrowUpRight data-icon="inline-end" />
          </Link>
        </aside>
      </section>
    </div>
  );
}
