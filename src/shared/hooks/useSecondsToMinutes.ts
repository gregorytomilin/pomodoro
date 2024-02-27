export const useSecondsToMinutes = () => {
  const formatNumber = (number: number) => {
    return String(number).padStart(2, "0");
  };

  return (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;
  };
};
