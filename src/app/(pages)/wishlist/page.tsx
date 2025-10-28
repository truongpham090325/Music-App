import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài hát yêu thích",
  description: "Project nghe nhạc trực tuyến",
};

export default function WishListPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang bài hát yêu thích</h1>
    </>
  );
}
