"use client"

export const PlayTime = () => {

    const handleChange = (e: any) => {
        const elementTotal = e.target;
        const value = parseFloat(elementTotal.value);

        const playAudioElement: any = document.querySelector(".play-audio");
        const audioElement = playAudioElement.querySelector(".inner-audio");
        audioElement.currentTime = value;
    }

    return (
        <>
        <div className="w-full relative inner-play-time">
            <div className="h-[4px] w-[0] bg-primary rounded-[50px] absolute top-[12px] left-0 inner-current-time"></div>
            <input
            type="range"
            min={0}
            max={0}
            defaultValue={0}
            className="w-full bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total-time"
            onChange={handleChange}
            />
        </div>
        </>
    );
};
