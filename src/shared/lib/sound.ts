import dzin from "@assets/audio/dzin.mp3";

export const dzinDzin = () => {
  const audio = new Audio();
  audio.src = dzin;
  audio.autoplay = true;
};
