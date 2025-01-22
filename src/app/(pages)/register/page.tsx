import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";
import { FormRegister } from "./FormRegister";

export const metadata: Metadata = {
  title: "Đăng kí",
  description: "Project nghe nhạc",
};

export default function Register() {
  return (
    <>
      <div className="inner-login h-[100vh] py-[30px] flex flex-col items-center w-full">
        <Title text="Đăng Ký Tài Khoản" />
        <FormRegister />
      </div>
    </>
  );
}
