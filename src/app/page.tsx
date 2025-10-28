import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Project nghe nhạc trực tuyến",
};

export default function Home() {
  return (
    <>
      <h1 className="text-[38px] font-[700] text-black h-[3000px] bg-white">
        Trang chủ
      </h1>
    </>
  );
}
