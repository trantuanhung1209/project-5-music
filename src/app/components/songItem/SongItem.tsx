import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { ButtonPlay } from "../button/ButtonPlay";

export const SongItem = (prop: { item: any }) => {
  const { item } = prop;
  return (
    <>
      <div className="bg-background-secondary px-[18px] py-[10px] rounded-[15px] flex gap-[20px] ">
        <ButtonPlay item={item} className="text-[18px] text-white" />
        <Link href={item.link} className="inner-item flex flex-1 justify-between items-center">
          <div className="inner-left flex items-center gap-[12px]">
            <div className="inner-thumb w-[42px] h-[42px] rounded-[8px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="inner-name font-[700] text-[14px] text-white">
              {item.title}
            </div>
          </div>
          <div className="inner-middle font-[400] text-[14px] text-white">
            {item.singer}
          </div>
          <div className="inner-right flex gap-[18px] items-center">
            <div className="inner-time font-[400] text-[14px] text-white">
              4:32
            </div>
            <button className="font-[400] text-[20px] text-white">
              <FaRegHeart className="hover:text-primary" />
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};
