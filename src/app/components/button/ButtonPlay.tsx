"use client";
import { FaPlay } from "react-icons/fa6";

export const ButtonPlay = (props: any) => {
  const { item, className } = props;
  const handlePlay = (event: any) => {
    event.stopPropagation();
    const linkAudio = item.audio;
    const playAudioElement: any = document.querySelector(".play-audio");

    if (playAudioElement) {
      const audioElement = playAudioElement.querySelector(".inner-audio");
      const audioSource = audioElement?.querySelector("source");
      if (audioSource) {
        audioSource.src = linkAudio;
      }

      if (audioElement) {
        audioElement.load();
        audioElement.play();
      }

      // show play audio
      playAudioElement.classList.remove("hidden");

      // show image
      const imageElement = playAudioElement.querySelector(".inner-image");
      if (imageElement) {
        imageElement.src = item.image;
        imageElement.alt = item.title;
      }

      // show title
      const titleElement = playAudioElement.querySelector(".inner-title");
      if (titleElement) {
        titleElement.innerHTML = item.title;
      }

      // show singer
      const singerElement = playAudioElement.querySelector(".inner-singer");
      if (singerElement) {
        singerElement.innerHTML = item.singer;
      }

      // show button pause
      const buttonPlayElement =
        playAudioElement.querySelector(".inner-button-play");
      if (buttonPlayElement) {
        buttonPlayElement.classList.add("play");
      }

      // get total time
      const totalTimeElement = playAudioElement.querySelector(
        ".inner-play-time .inner-total-time"
      );
      const currentTimeElement = playAudioElement.querySelector(
        ".inner-play-time .inner-current-time"
      );

      audioElement.onloadedmetadata = () => {
        const totalTime = audioElement.duration;
        totalTimeElement.max = totalTime;

        audioElement.ontimeupdate = () => {
          const currentTime = audioElement.currentTime;
          const currentPerTotal = (currentTime / totalTime) * 100;

          currentTimeElement.style.width = `${currentPerTotal}%`;
          totalTimeElement.value = currentTime;
        };
      };

      // remove class active for front song
      const elementSongOld = document.querySelector(`[song-id].active`);
      if (elementSongOld) {
        elementSongOld.classList.remove("active");
      }

      // Thêm class active cho bài hát
      const elementSong = document.querySelector(`[song-id="${item.id}"]`);
      elementSong?.classList.add("active");
    }
  };
  return (
    <>
      <button className={className} onClick={handlePlay}>
        <FaPlay />
      </button>
    </>
  );
};
