import { SingersItem } from "@/app/components/singersItem/SingersItem";
import { Title } from "@/app/components/title/Title";
import { dbFireBase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Project nghe nhạc",
};

export default function Singers() {
  const dataSingers: any = [];
  onValue(ref(dbFireBase, "singers"), (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      dataSingers.push({
        id: key,
        title: data.title,
        description: data.description,
        image: data.image,
        link: `/singers/${key}`,
        audio: data.audio,
      });
    });
  });

  // const dataSingers = [
  //   {
  //     id: 1,
  //     title: "Sơn Tùng M-TP",
  //     description: "Sơn Tùng M-TP",
  //     image: "/images/Home-img3.png",
  //   },
  // ];

  return (
    <>
      <div className="inner-list-singer h-[100vh] pb-[500px]">
        <Title text="Danh sách ca sĩ" />
        <div className="inner-singers grid grid-cols-5 gap-[20px] items-center">
          {dataSingers.map((singer: any) => (
            <SingersItem key={singer.id} item={singer} />
          ))}
        </div>
      </div>
    </>
  );
}
