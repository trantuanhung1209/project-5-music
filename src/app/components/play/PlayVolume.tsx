"use client";
import { FaVolumeUp } from "react-icons/fa";

export const PlayVolume = () => {
    const handleChange = (e: any) => {
        const elementTotal = e.target;
        const value = parseFloat(elementTotal.value);

        const playAudioElement: any = document.querySelector(".play-audio");
        const audioElement = playAudioElement.querySelector(".inner-audio");
        audioElement.volume = value / 100;

        const volumeCurrentElement = playAudioElement.querySelector(".inner-volume .inner-current");
        volumeCurrentElement.style.width = `${value}%`
    };
    return (
        <>
        <div className="flex items-center gap-[12px] inner-volume">
            <button className="text-white text-[20px]">
            <FaVolumeUp />
            </button>
            <div className="w-full relative">
            <div className="h-[4px] w-[100%] bg-primary rounded-[50px] absolute top-[12px] left-0 inner-current"></div>
            <input
                type="range"
                min={0}
                max={100}
                defaultValue={100}
                className="w-full bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
                onChange={handleChange}
            />
            </div>
        </div>
        </>
    );
};
