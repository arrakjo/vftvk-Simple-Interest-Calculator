function compute() {
  // Set the values from elements
  p = document.getElementById("principal").value;
  n = document.getElementById("years").value;
  r = document.getElementById("rate").value;
  result = document.getElementById("result");

  // Calculate the interest
  interest = (p * n * r) / 100;

  // Get the current year and add on top the value of n
  year = new Date().getFullYear() + parseInt(n);

  // Put the result into the empty span under the Calculate button
  result.innerHTML =
    "If you deposit " +
    p +
    ", at the rate of " +
    r +
    "%<br />You will receive an amount of " +
    interest +
    ", in the year " +
    year;

  // Prevent browser window refresh
  event.preventDefault();
}

function updateRate() {
  rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval + "%";
}
