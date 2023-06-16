const clock = document.getElementById("clock");

setInterval(() => {
  timer();
}, 1000);

function timer() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const padHours = hours.toString().padStart(2, "0");
  const padMinutes = minutes.toString().padStart(2, "0");
  const padSeconds = seconds.toString().padStart(2, "0");
  clock.innerHTML = `${padHours} : ${padMinutes} : ${padSeconds}`;
}
