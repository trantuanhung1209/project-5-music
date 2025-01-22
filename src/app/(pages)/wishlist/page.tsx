import { SongItem } from "@/app/components/songItem/SongItem";
import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách bài hát yêu thích",
  description: "Project nghe nhạc",
};

export default function Wishlist() {
  const dataSongs = [
    {
      id: 1,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
    {
      id: 2,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
    {
      id: 3,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
    {
      id: 4,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
    {
      id: 5,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
    {
      id: 6,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
    {
      id: 7,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
    {
      id: 8,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
    {
      id: 9,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
    {
      id: 10,
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      image: "/images/Home-img3.png",
    },
  ];
  return (
    <>
      <div className="inner-search flex flex-col justify-center">
        <Title text="Bài Hát Yêu Thích" />

        <div className="inner-songs pb-[150px] flex flex-col gap-[10px] justify-center">
          {dataSongs.map((item) => (
            <SongItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
