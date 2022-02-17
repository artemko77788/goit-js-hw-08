import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

const timeLocal = localStorage.getItem("videoplayer-current-time");
if (timeLocal !== null) {
  player.setCurrentTime(timeLocal);
}
const time = e => {
  localStorage.setItem("videoplayer-current-time", e.seconds);
};
player.on("timeupdate", throttle(time, 1000));
