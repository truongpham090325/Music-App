import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Project nghe nhạc trực tuyến",
};

export default function SearchPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang kết quả tìm kiếm</h1>
    </>
  );
}
