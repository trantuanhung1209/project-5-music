
import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";
import { Section1 } from "./Section1";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Project nghe nhạc",
};

export default function SearchResult() {

  

  // const dataSongs = [
  //   {
  //     id: 1,
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     image: "/images/Home-img3.png",
  //   },
  // ];
  return (
    <>
      <div className="inner-search flex flex-col justify-center pb-[300px]">
        <Title text="Danh sách bài hát" />

        <div className="inner-songs pb-[150px] flex flex-col gap-[10px] justify-center">
          <Section1 />
        </div>
      </div>
    </>
  );
}
