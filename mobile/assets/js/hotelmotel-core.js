// const headerMenu = document.querySelector(".header-menu");
// const headerMenuClose = document.querySelector(".header-menu-close");
// const bars3 = document.querySelector(".bars3");

// if (window.innerWidth >= 1024) {
//   headerMenuClose.addEventListener("click", function () {
//     headerMenu.style.visibility = "hidden";
//     headerMenu.style.opacity = "0";
//     // headerMenu.style.display = "none";
//   });
//   bars3.addEventListener("click", function () {
//     headerMenu.style.visibility = "visible";
//     headerMenu.style.opacity = "1";
//     // headerMenu.style.display = "block";
//   });
// } else {
//   headerMenuClose.addEventListener("click", function () {
//     headerMenu.style.transform = "translateX(1024px)";
//   });
//   bars3.addEventListener("click", function () {
//     headerMenu.style.transform = "translateX(0)";
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
//   const dropdownIcons = document.querySelectorAll(".dropdown-icon");

//   toggleDropdowns.forEach((toggle, index) => {
//     const submenu = toggle.nextElementSibling;
//     const dropdownIcon = dropdownIcons[index];

//     toggle.addEventListener("click", function () {
//       dropdownIcon.classList.toggle("rotate-180");

//       if (submenu.style.maxHeight) {
//         submenu.style.maxHeight = null;
//         submenu.style.opacity = "0";
//       } else {
//         submenu.style.maxHeight = submenu.scrollHeight * 10 + "px";
//         submenu.style.opacity = "1";
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const faqBox = document.querySelectorAll(".faq-box");
  const faqBtns = document.querySelectorAll(".faq-btn");
  const faqAnswers = document.querySelectorAll(".faq-answer");

  faqBox.forEach((button, index) => {
    button.addEventListener("click", function () {
      const faqAnswer = faqAnswers[index];

      faqAnswers[index].style.marginTop = "8px"
      // button.style.backgroundColor = "#FFF3E0";
      // button.style.border = "1px solid #FFDFB1";

      if (faqAnswer.classList.contains("max-h-0")) {
        faqAnswer.classList.remove("max-h-0", "opacity-0");
        faqAnswer.classList.add("max-h-screen", "opacity-100");
      } else {
        faqAnswer.classList.add("max-h-0", "opacity-0");
        faqAnswer.classList.remove("max-h-screen", "opacity-100");


        button.style.backgroundColor = ""; 
        button.style.border = ""; 
      }
    });
  });
});