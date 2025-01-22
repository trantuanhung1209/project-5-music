"use client";

import {
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

export const PlayAction = () => {
  const handlePlay = () => {
    const playAudioElement: any = document.querySelector(".play-audio");

    if (playAudioElement) {
      const buttonPlayElement =
        playAudioElement.querySelector(".inner-button-play");
      const audioElement = playAudioElement.querySelector(".inner-audio");

      if (buttonPlayElement.classList.contains("play")) {
        buttonPlayElement.classList.remove("play");
        audioElement.pause();
      } else {
        buttonPlayElement.classList.add("play");
        audioElement.play();
      }
    }
  };

  const handlePrev = () => {
    const currentSong = document.querySelector("[song-id].active");
    if (currentSong) {
      const prevSong = currentSong.previousElementSibling;
      if (prevSong) {
        const buttonPlay: any = prevSong.querySelector(".inner-button-play");
        buttonPlay.click();
      }
    }
  };

  const handleNext = () => {
    const currentSong = document.querySelector("[song-id].active");
    if (currentSong) {
      const nextSong = currentSong.nextElementSibling;
      if (nextSong) {
        const buttonPlay: any = nextSong.querySelector(".inner-button-play");
        buttonPlay.click();
      }
    }
  };

  return (
    <>
      <div className="flex gap-[42px] items-center">
        <button
          className="text-white text-[16px] hover:text-primary"
          onClick={handlePrev}
        >
          <FaStepBackward />
        </button>
        <button
          className="p-[9px] hover:bg-primary rounded-full text-white inner-button-play"
          onClick={handlePlay}
        >
          <FaPlay className="inner-icon-play" />
          <FaPause className="inner-icon-pause" />
        </button>
        <button
          className="text-white text-[16px] hover:text-primary"
          onClick={handleNext}
        >
          <FaStepForward />
        </button>
      </div>
    </>
  );
};
