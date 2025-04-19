// Theme toggle functionality
document.getElementById("themeToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  
  // Optional: Save preference to localStorage
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("darkTheme", isDark);
});

// Optional: Check for saved theme preference on page load
if (localStorage.getItem("darkTheme") === "true") {
  document.body.classList.add("dark-theme");
}
