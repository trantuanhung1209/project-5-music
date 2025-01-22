import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { ButtonPlay } from "../button/ButtonPlay";

export const TopSongItem = (prop: { item: any }) => {
  const handleClick = (event: any) => {
    event.stopPropagation();
  };
  const { item } = prop;

  return (
    <>
      <div className="inner-item flex justify-between items-center  bg-background-secondary p-[10px] rounded-[15px]" song-id={item.id}>
        <Link href={item.link} className=" flex-1 flex items-center gap-[10px] pr-[20px] ">
          <div className="inner-thumb w-[76px] h-[76px] rounded-[10px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="inner-info flex-1">
            <h3 className="inner-name font-[700] text-[16px] text-white">
              {item.title}
            </h3>
            <p className="inner-desc font-[500] text-[12px] text-[#FFFFFF80]">
              {item.singer}
            </p>
            <p className="font-[400] text-[12px] text-white">
              {item.listen.toLocaleString()} lượt nghe
            </p>
          </div>
        </Link>
        <div className="inner-button flex gap-[10px] items-center ">
          <ButtonPlay item={item} className = "inner-play w-[34px] h-[34px] border-[1px] border-solid rounded-full flex justify-center items-center text-white text-[18px] hover:bg-primary hover:border-primary inner-button-play" />
          <button className="inner-like w-[34px] h-[34px] border-[1px] border-solid rounded-full flex justify-center items-center text-white text-[18px] hover:bg-primary hover:border-primary">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </>
  );
};
