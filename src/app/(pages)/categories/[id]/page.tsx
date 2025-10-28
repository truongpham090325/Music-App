import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách bài hát theo danh mục",
  description: "Project nghe nhạc trực tuyến",
};

export default function CategoryDetailPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">
        Trang danh sách bài hát theo danh mục
      </h1>
    </>
  );
}
