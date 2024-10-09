function get() {
  let birthDate = new Date(document.getElementById("dates").value);
  let currentDate = new Date();

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  // adjust months and days if necessary
  if (months < 0) {
      years--;
      months += 12;
  }
  if (days < 0) {
      months--;
      days += getDaysInMonth(birthDate.getMonth() + months, birthDate.getFullYear());
  }

  document.getElementById("age-in-years").innerHTML = "Age in Years: " + years;
  document.getElementById("age-in-months").innerHTML = "Age in Months: " + (years * 12 + months);
  document.getElementById("age-in-days").innerHTML = "Age in Days: " + calculateDays(birthDate, currentDate);
}

// helper function to get the number of days in a month
function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

// helper function to calculate the total number of days
function calculateDays(birthDate, currentDate) {
  let totalDays = 0;
  for (let year = birthDate.getFullYear(); year < currentDate.getFullYear(); year++) {
      totalDays += isLeapYear(year) ? 366 : 365;
  }
  for (let month = birthDate.getMonth(); month < currentDate.getMonth(); month++) {
      totalDays += getDaysInMonth(month, birthDate.getFullYear());
  }
  totalDays += currentDate.getDate() - birthDate.getDate();
  return totalDays;
}

// helper function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}