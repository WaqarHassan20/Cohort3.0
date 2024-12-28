let num = 1;
function stopwatch() {
  console.clear();
  console.log(num);
  num++;
  setTimeout(stopwatch, 1000);
}

stopwatch();
