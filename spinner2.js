const spin = function() {
  const arr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
  let pos = 0;

  setInterval(() => {
    process.stdout.write(arr[pos % arr.length]);
    pos++;
  }, 150);
};
spin();