import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Project nghe nhạc trực tuyến",
};

export default function SongDetailPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang chi tiết bài hát</h1>
    </>
  );
}
