"use client";
import { SongItem } from "@/app/components/songItem/SongItem";
import { dbFireBase } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Section1 = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("keyword") || "";

  const [dataSongs, setDataSongs] = useState<any>(null);

  useEffect(() => {
    const dataSection1: any = [];
    const fetchData = async () => {
        const items = await get(ref(dbFireBase, 'songs'));
        items.forEach((item: any) => {
            const key = item.key;
            const data = item.val();

            if(data.title.includes(search)) {
                dataSection1.push(
                    {
                        id: key,
                        image: data.image,
                        title: data.title,
                        singer: "",
                        link: `/song/${key}`,
                        time: "4:32",
                        singerId: data.singerId,
                        audio: data.audio
                    }
                );
            }
        })

        for (const data of dataSection1) {
            const items = await get(ref(dbFireBase, 'singers/' + data.singerId[0]));
            const dataSinger = items.val();
            data.singer = dataSinger.title;
        }
        setDataSongs(dataSection1);
    };

    fetchData();
  }, [search]);

  return (
    <>
      {dataSongs && (
        <>
          {dataSongs.map((item: any, index: number) => (
            <SongItem key={index} item={item} />
          ))}
        </>
      )}
    </>
  )
}
