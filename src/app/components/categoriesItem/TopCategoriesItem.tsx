import Link from "next/link";

export const TopCategoriesItem = (prop: { item: any }) => {
  const { item } = prop;
  return (
    <>
      <div className="inner-item">
        <Link href={item.link}>
          <div className="inner-thumb w-[180px] h-[180px] mb-[10px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="inner-info">
            <h3 className="inner-name font-[700] text-[16px] text-white mb-[10px]">
              {item.title}
            </h3>
            <p className="inner-desc font-[500] text-[12px] text-[#FFFFFF80] truncate ">
              {item.description}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
