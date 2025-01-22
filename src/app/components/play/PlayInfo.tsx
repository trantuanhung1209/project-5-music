export const PlayInfo = () => {
    return (
        <>
            <div className="flex gap-[14px] items-center">
                <div className="w-[49px] h-[49px] flex-1">
                    <img src="/" alt="" className="w-full h-full inner-image" />
                </div>
                <div className="flex flex-col gap-[2px]">
                    <div className="font-[700] text-[16px] text-white inner-title"></div>
                    <div className="font-[700] text-[12px] text-[#FFFFFF70] inner-singer"></div>
                </div>
            </div>
        </>
    );
}