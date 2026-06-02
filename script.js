document.addEventListener("DOMContentLoaded", () => {
  const todayDate = document.getElementById("today-date");

  if (todayDate) {
    todayDate.textContent = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric"
    });
  }

  const photoCard = document.getElementById("photo-card");
  const photoInput = document.getElementById("photo-input");
  const photoPlaceholder = document.getElementById("photo-placeholder");
  const photoPreview = document.getElementById("photo-preview");

  photoCard.addEventListener("click", () => {
    photoInput.click();
  });

  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    photoPreview.src = imageUrl;
    photoPreview.hidden = false;
    photoPlaceholder.hidden = true;
  });

  console.log("🍓 NatsuBerry Loaded");
});
