let rotation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let time = 0;
let interval = 200;

for (let symbol of rotation) {
  setTimeout(() => {
    process.stdout.write(`${symbol}`);
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
  time += interval;
}
