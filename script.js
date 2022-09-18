const toggleBtn = document.getElementById("toggleBtn");
const socialIcons = document.getElementById("socialIcons");

toggleBtn.addEventListener("click", () => {
  socialIcons.classList.toggle("fade");
  toggleBtn.classList.toggle("change");
});
