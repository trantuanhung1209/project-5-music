import { Metadata } from "next";
import Link from "next/link";
import { Title } from "./components/title/Title";

export const metadata: Metadata = {
  title: "404 not found",
  description: "...",
};

export default function NotFoundPage() {
  return (
    <>
      <div className="inner-404 h-[100vh]">
        <Title text="404 not found" />
        <div className="text-center mt-[20px]">
          <Link
            href="/"
            className="text-[20px] font-[700] bg-background-secondary  text-white p-[20px]"
          >
            ve trang chu
          </Link>
        </div>
      </div>
    </>
  );
}
