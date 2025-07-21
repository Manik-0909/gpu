// Page Loader Animation
window.addEventListener("DOMContentLoaded", function () {
   const loader = document.getElementById("page-loader");

   setTimeout(() => {
      loader.classList.add("fade-out");

      setTimeout(() => loader.remove(), 100);
   }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
   const closeButton = document.querySelector('[data-bs-dismiss="alert"]');
   const alertSection = document.querySelector('[role="alert"]');

   if (closeButton && alertSection) {
      closeButton.addEventListener("click", function () {
         alertSection.style.display = "none";
      });
   }
});

document.addEventListener("DOMContentLoaded", function () {
   const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
   );
   [...tooltipTriggerList].forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
   });
});
