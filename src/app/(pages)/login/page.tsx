import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Project nghe nhạc trực tuyến",
};

export default function LoginPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang đăng nhập</h1>
    </>
  );
}
