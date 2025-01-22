import type { Metadata } from "next";
import "./globals.css";
import { TopSongItem } from "./components/songItem/TopSongItem";
import { Title } from "./components/title/Title";
import { TopCategoriesItem } from "./components/categoriesItem/TopCategoriesItem";
import { TopSingersItem } from "./components/singersItem/TopSingersItem";
import { onValue, ref } from "firebase/database";
import { dbFireBase } from "./firebaseConfig";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Project nghe nhạc",
};

export default function Home() {
  //data section 1
  const dataSongs: any = [];
  const songRef = ref(dbFireBase, "songs");
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      if (dataSongs.length < 3) {
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
  //     listen: 24500,
  //     image: "/images/hoquanghieu.png",
  //   },
  // ];
  // End data section 1


  // data section 2
  const dataCategories: any = [];
  onValue(ref(dbFireBase, "categories"), (items) => {
    items.forEach(item => {
      const key = item.key;
      const data = item.val();

      if (dataCategories.length < 5) {
        dataCategories.push({
          id: key,
          title: data.title,
          description: data.description,
          image: data.image,
          link: `/categories/${key}`,
        })
      }
    })
  });
  // const dataCategories = [
  //   {
  //     id: 1,
  //     title: "Nhạc Trẻ",
  //     description:
  //       "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Trẻ",
  //     image: "/images/Home-img2.png",
  //   },
  // ];
  // End data section 2

  // data section 3
  const dataSingers: any = [];
  onValue(ref(dbFireBase, "singers"), (items) => {
    items.forEach(item => {
      const key = item.key;
      const data = item.val();

      if (dataSingers.length < 5) {
        dataSingers.push({
          id: key,
          title: data.title,
          description: data.description,
          image: data.image,
          link: `/singers/${key}`,
        })
      }
    })
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
      {/* section-1 */}
      <section className="section-1 py-[30px]">
        <div className="inner-wrap flex gap-[30px] items-start">
          <div className="inner-left w-[534px]">
            <div
              className="w-full flex items-center rounded-[15px] bg-cover"
              style={{ backgroundImage: "url('/images/Home-bg-1.png')" }}
            >
              <div className="flex-1 mr-[34px] ml-[30px]">
                <div className="font-[700] text-[32px] text-white mb-[6px]">
                  Nhạc EDM
                </div>
                <div className="font-[500] text-[14px] text-white">
                  Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc
                  hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance
                  Âu Mỹ
                </div>
              </div>
              <div className="w-[215px] mr-[22px] mt-[48px]">
                <img
                  src="/images/Home-img1.png"
                  alt="Nhạc EDM"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="inner-right flex-1">
            <Title text="Nghe Nhiều" />
            <div className="inner-songs flex flex-col justify-center gap-[12px] w-full">
              {dataSongs.splice(0, 3).map((song: any) => (
                <TopSongItem key={song.id} item={song} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End section-1 */}

      {/* Section-2 */}
      <section className="section-2">
        <div className="inner-title">
          <Title text="Danh Mục Nổi Bật" />
        </div>
        <div className="inner-categories grid grid-cols-5 gap-[20px] items-center">
          {dataCategories.map((category: any) => (
            <TopCategoriesItem key={category.id} item={category} />
          ))}
        </div>
      </section>
      {/* End Section-2 */}

      {/* Section-3 */}
      <section className="section-3 pt-[30px] pb-[150px]">
        <div className="inner-title">
          <Title text="Ca Sĩ Nổi Bật" />
        </div>
        <div className="inner-categories grid grid-cols-5 gap-[20px] items-center">
          {dataSingers.map((singer: any) => (
            <TopSingersItem key={singer.id} item={singer} />
          ))}
        </div>
      </section>
      {/* End section-3 */}
    </>
  );
}
