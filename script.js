// Sticky Navbar Scroll Effect and Parallax Hero Video
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const video = document.getElementById("bgVideo");

  // Add or remove scrolled class on navbar
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Parallax effect for video background
  if (video) {
    const scrollY = window.scrollY;
    video.style.transform = `translateY(${scrollY * 0.4}px)`;
  }
});

// Outfit Recommender Form
const form = document.getElementById("outfitForm");
if (form) {
  form.addEventListener("submit", function (e) {
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
}
