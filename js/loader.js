// PAGE LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Keep loader visible for at least 2 seconds
  setTimeout(() => {
    loader.classList.add("is-loaded");
  }, 1500);
});
