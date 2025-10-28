import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Project nghe nhạc trực tuyến",
};

export default function CategoryPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang danh mục bài hát</h1>
    </>
  );
}
