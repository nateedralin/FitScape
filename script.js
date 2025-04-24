// sticky navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// fit recommender
document.getElementById("outfitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const mood = document.getElementById("mood").value.toLowerCase();
  const weather = document.getElementById("weather").value.toLowerCase();
  let result = "Try a monochrome base and layer it up with texture.";

  if (mood.includes("cozy") && weather.includes("rain")) {
    result = "Go for an oversized knit, trench coat, and waterproof boots.";
  } else if (mood.includes("confident") && weather.includes("sunny")) {
    result = "Cropped blazer, tapered trousers, and statement sunglasses.";
  } else if (mood.includes("edgy") || weather.includes("windy")) {
    result = "Techwear jacket, cargo pants, and layered hood.";
  }

  document.getElementById("recommendationResult").innerText = result;
});
