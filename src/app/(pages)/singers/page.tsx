import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Project nghe nhạc trực tuyến",
};

export default function SingerPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang danh sách ca sĩ</h1>
    </>
  );
}
