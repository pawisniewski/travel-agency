export const formatTime = (timeInSec) => {

  if (typeof(timeInSec) !== 'number' || timeInSec < 0) {
    return null; 
  }
  else {
    let seconds = Math.floor(timeInSec % 60);
    let minutes = Math.floor((timeInSec / 60) % 60);
    let hours = Math.floor(timeInSec / 3600);

    seconds = seconds.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }
};
