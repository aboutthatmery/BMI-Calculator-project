const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

  // BMI = weight in KG / (height in cm * height in cm)

  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI < 24.9) {
    status = "Healthy";
  }
  if (BMI >= 25.0 && BMI < 29.9) {
    status = "Overweight";
  }
  if (BMI >= 30.0) {
    status = "Obese";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `You are <span id="comment">${status}</span>`;
});