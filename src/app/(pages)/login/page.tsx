import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";
import { FormLogin } from "./FormLogin";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Project nghe nhạc",
};

export default function Login() {
  return (
    <>
      <div className="inner-login h-[100vh] py-[30px] flex flex-col items-center w-full">
        <Title text="Đăng Nhập Tài Khoản" />
        <FormLogin />
      </div>
    </>
  );
}
