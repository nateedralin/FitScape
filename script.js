document.getElementById("outfitForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const mood = document.getElementById("mood").value.toLowerCase();
  const weather = document.getElementById("weather").value.toLowerCase();

  let recommendation = "Try layering basics with bold accessories.";

  if (mood.includes("cozy") && weather.includes("rain")) {
    recommendation = "Oversized hoodie, waterproof boots, and a knit beanie.";
  } else if (mood.includes("confident") && weather.includes("sunny")) {
    recommendation = "Monochrome blazer, wide-leg pants, and shades.";
  }

  document.getElementById("recommendationResult").innerText = recommendation;
});
