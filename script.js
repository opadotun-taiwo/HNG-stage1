// Function to update the current day of the week
function updateDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  const dayElement = document.getElementById("week");
  dayElement.textContent = currentDay;
}

// Function to update the current UTC time
function updateUTCTime() {
  const currentDate = new Date();
  const utcTime = currentDate.toUTCString();
  const timeElement = document.getElementById("times");
  timeElement.textContent = utcTime;
}

// Call the functions to update the day of the week and UTC time when the page loads
window.addEventListener("load", function () {
  updateDayOfWeek();
  updateUTCTime();
});

// Optionally, update the day of the week and UTC time periodically (e.g., every minute)
setInterval(function () {
  updateDayOfWeek();
  updateUTCTime();
}, 60000); // 60000 milliseconds = 1 minute
