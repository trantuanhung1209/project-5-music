import { SongItem } from "@/app/components/songItem/SongItem";
import { Title } from "@/app/components/title/Title";
import { dbFireBase } from "@/app/firebaseConfig";
import { get, onValue, ref } from "firebase/database";
import type { Metadata } from "next";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Project nghe nhạc",
};

export default async function Singers(props: any) {
  const id = await props.params.id;
  let dataFinal: any = null;
  onValue(ref(dbFireBase, '/singers/' + id), (item) => {
    dataFinal = item.val();
  });

  const dataSongs: any[] = [];
  const songRef = ref(dbFireBase, 'songs');
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      if(data.singerId.includes(id)) {
        dataSongs.push(
          {
            id: key,
            image: data.image,
            title: data.title,
            singer: dataFinal.title,
            link: `/song/${key}`,
            time: "4:32",
            audio: data.audio
          }
        );
      }
    })
  });

  // const dataSongs = [
  //   {
  //     id: 1,
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     image: "/images/Home-img3.png",
  //     link: "/song/1",
  //   },
  // ];
  return (
    <>
      <div className="inner-singer-detail flex flex-col gap-[30px] justify-center">
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
              {dataFinal.description}
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
