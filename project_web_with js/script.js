const form = document.querySelector(".calculate-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = Math.abs(parseInt(document.querySelector("#height").value));
  const weight = Math.abs(parseInt(document.querySelector("#weight").value));
  const age = Math.abs(parseInt(document.querySelector("#age").value));
  const gender = document.querySelector("#gender").value;

  //ИМТ
  const bmi = weight / (height / 100) ** 2;

  // Формула для мужчин: BMR = 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,755 × возраст в годах)
  // Формула для женщин: BMR = 655 + (9,6 × вес в кг) + (1,8 × рост в см) - (4,7 × возраст в годах)

  let bmr;

  if (gender === "male") {
    bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
  } else if (gender === "female") {
    bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  }

  let status;

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (18.5 <= bmi <= 24.9) {
    status = "Healthy";
  } else if (25.0 <= bmi <= 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  alert(
    "BMI: " +
      bmi.toFixed(2) +
      "\n" +
      "WEIGHT STATUS: " +
      status +
      "\n" +
      "BMR: " +
      bmr.toFixed(2) +
      " ccal"
  );
});
