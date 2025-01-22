import { SongItem } from "@/app/components/songItem/SongItem";
import { TopSongItem } from "@/app/components/songItem/TopSongItem";
import { Title } from "@/app/components/title/Title";
import { dbFireBase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";
import { on } from "process";

export const metadata: Metadata = {
  title: "Danh sách bài hát theo danh mục",
  description: "Project nghe nhạc",
};

export default async function CategoriesDetail(props: any) {
  const { id } = await props.params;

  let dataCategory: any = null;
  onValue(ref(dbFireBase, "/categories/" + id), (item) => {
    dataCategory = item.val();
  });

  const dataSongs: any = [];
  const songRef = ref(dbFireBase, "songs");
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      if (data.categoryId === id) {
        onValue(ref(dbFireBase, "/singers/" + data.singerId[0]), (itemSinger) => {
          const dataSinger = itemSinger.val();
          dataSongs.push({
            id: key,
            title: data.title,
            singer: dataSinger.title,
            listen: data.listen,
            image: data.image,
            link: `/song/${key}`,
            audio: data.audio,
          });
        });
      }
      
    });
  });

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
      <div className="inner-category-detail flex flex-col gap-[30px] justify-center pb-[200px]">
        <div className="inner-top flex gap-[20px] items-center">
          <div className="inner-thumb w-[180px] h-[180px] rounded-[15px]">
            <img
              src={dataCategory.image}
              alt={dataCategory.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="inner-info flex-1">
            <h2 className="inner-title font-[700] text-[35px] text-primary mb-[10px]">
              Nhạc Trẻ
            </h2>
            <p className="inner-desc font-[400] text-[14px] text-white">
              {dataCategory.description}
            </p>
          </div>
        </div>
        <div className="inner-bottom flex flex-col justify-center">
          <Title text="Danh sách bài hát" />

          <div className="inner-songs pb-[150px] flex flex-col gap-[10px] justify-center">
            {dataSongs.map((item: any) => (
              <SongItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
