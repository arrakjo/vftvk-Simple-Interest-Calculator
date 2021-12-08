function compute() {
  // Set the values from elements
  p = document.getElementById("principal").value;

  // if (p === 0) {
  //   console.alert("Initial deposit cannot be zero.");
  // } else if (p < 0) {
  //   console.alert("Please enter a positive number.");
  // } else return p;

  n = document.getElementById("years").value;
  r = document.getElementById("rate").value;
  result = document.getElementById("result");

  // Calculate the interest
  interest = (p * n * r) / 100;

  // Get the current year and add on top the value of n
  year = new Date().getFullYear() + parseInt(n);

  // Check the deposit amount and act accordingly
  if (interest === 0) {
    alert("Initial deposit cannot be zero");
  } else if (interest < 0) {
    alert("Please enter a positive number for the deposit.");
  } else
    result.innerHTML =
      "If you deposit " +
      p +
      ", at the rate of " +
      r +
      "%<br />You will receive an amount of " +
      interest +
      ", in the year " +
      year;

  event.preventDefault();

  // // Put the result into the empty span under the Calculate button
}

function updateRate() {
  rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval + "%";
}
