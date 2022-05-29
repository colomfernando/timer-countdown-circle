export const calculateInitialTime = (
  minutes: number,
  seconds: number
): number => {
  const initialMinutes = minutes * 60 * 1000;
  const initialSeconds = seconds * 1000;
  const initialTime = initialMinutes + initialSeconds;

  return initialTime;
};

export const calculateRemainingMinutes = (remainingTime: number): number =>
  Math.floor(remainingTime / (60 * 1000));

export const calculateRemainingSeconds = (remainingTime: number): number =>
  Math.floor((remainingTime / 1000) % 60);
