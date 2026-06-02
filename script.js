const startDate = new Date("2026-06-01T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

const todayDate = document.getElementById("today-date");

todayDate.textContent = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric"
});

updateCountdown();
setInterval(updateCountdown, 1000);
