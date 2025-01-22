import { TopCategoriesItem } from "@/app/components/categoriesItem/TopCategoriesItem";
import { Title } from "@/app/components/title/Title";
import { dbFireBase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Project nghe nhạc",
};

export default function Categories() {
  const dataCategories: any = [];
  onValue(ref(dbFireBase, "categories"), (items) => {
    items.forEach(item => {
      const key = item.key;
      const data = item.val();

      if (dataCategories.length < 10) {
        dataCategories.push({
          id: key,
          title: data.title,
          description: data.description,
          image: data.image,
          link: `/categories/${key}`
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
  return (
    <>
      <div className="inner-category h-[85vh]">
        <Title text="Danh mục bài hát" />
        <div className="inner-categories grid grid-cols-5 gap-[20px] items-center">
          {dataCategories.map((item: any) => (
            <TopCategoriesItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
