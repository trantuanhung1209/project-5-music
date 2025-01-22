import { PlayAction } from "./PlayAction";
import { PlayInfo } from "./PlayInfo";
import { PlayTime } from "./PlayTime";
import { PlayVolume } from "./PlayVolume";

export const Play = () => {
    return (
        <>
        <div className="flex gap-[68px] items-center play-audio hidden">
            <audio className="inner-audio hidden">
                <source src="/" />
            </audio>
            <PlayInfo />
            <div className="flex flex-col gap-[12px] items-center justify-center flex-1">
                <PlayAction />
                <PlayTime />
            </div>
            <PlayVolume />
        </div>
        </>
    );
};
