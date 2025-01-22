import { SongItem } from "@/app/components/songItem/SongItem";
import { Title } from "@/app/components/title/Title";
import { dbFireBase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Project nghe nhạc",
};

export default async function SongDetail(props: any) {
  const { id } = await props.params;
  let dataFinal: any = null;

  onValue(ref(dbFireBase, '/songs/' + id), async (item) => {
    dataFinal = item.val();

    onValue(ref(dbFireBase, '/singers/' + dataFinal.singerId[0]), (itemSinger) => {
      const dataSinger = itemSinger.val();
      dataFinal["singer"] =  dataSinger.title;
    })
  })

  const dataSongs: any = [];
  const songRef = ref(dbFireBase, 'songs');
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      if(data.categoryId === dataFinal.categoryId && key !== id) {
        onValue(ref(dbFireBase, '/singers/' + data.singerId[0]), (itemSinger) => {
          const dataSinger = itemSinger.val();
          dataSongs.push(
            {
              id: key,
              image: data.image,
              title: data.title,
              singer: dataSinger.title,
              link: `/song/${key}`,
              time: "4:32",
              audio: data.audio
            }
          );
        })
      }
    })
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
      <div className="inner-songs-detail flex flex-col gap-[30px] justify-center">
        <div className="inner-top flex gap-[20px] items-center">
          <div className="inner-thumb w-[180px] h-[180px] rounded-[15px]">
            <img
              src={dataFinal.image}
              alt={dataFinal.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="inner-info flex-1">
            <h2 className="inner-title font-[700] text-[35px] text-primary mb-[10px]">
              {dataFinal.title}
            </h2>
            <p className="inner-desc font-[400] text-[14px] text-white">
              {dataFinal.singer}
            </p>
          </div>
        </div>
        <div className="inner-middle">
          <Title text="Lời Bài Hát" />
          <div className="inner-lyric bg-background-secondary text-[14px] text-white p-[20px] rounded-[15px] whitespace-pre-line">
            {dataFinal.lyric}
          </div>
        </div>
        <div className="inner-bottom flex flex-col justify-center">
          <Title text="Bài Hát Cùng Danh Mục" />

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
