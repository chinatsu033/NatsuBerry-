document.addEventListener("DOMContentLoaded", () => {

  const todayDate = document.getElementById("today-date");

  if (todayDate) {
    todayDate.textContent = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric"
    });
  }

  console.log("🍓 NatsuBerry Loaded");

});
