const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (window.innerWidth >= 1024) {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.visibility = "hidden";
    headerMenu.style.opacity = "0";
    // headerMenu.style.display = "none";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.visibility = "visible";
    headerMenu.style.opacity = "1";
    // headerMenu.style.display = "block";
  });
} else {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(1024px)";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(0)";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
  const dropdownIcons = document.querySelectorAll(".dropdown-icon");

  toggleDropdowns.forEach((toggle, index) => {
    const submenu = toggle.nextElementSibling;
    const dropdownIcon = dropdownIcons[index];

    toggle.addEventListener("click", function () {
      dropdownIcon.classList.toggle("rotate-180");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight * 10 + "px";
        submenu.style.opacity = "1";
      }
    });
  });
});

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


if (document.getElementById("search-box")) {
  const fetchContentModule = document.querySelector(".fetch-content-module");
  const reserveBtn = document.querySelectorAll(".reserve-btn");

  const classMapping = {
    "hotel-btn": 213870,
    "flight-btn": 213871,
    "tour-btn": 153206,
    "flighthotel-btn": 213899,
    "insurance-btn": 213900,
  };

  const idMapping = {
    "hotel-btn": 2375544,
    "flight-btn": 2375572,
    "tour-btn": 2313340,
    "flighthotel-btn": 2375575,
    "insurance-btn": 2375578,
  };

  const faqcatidMapping = {
    "hotel-btn": 2375547,
    "flight-btn": 2312905,
    "tour-btn": 2312908,
    "flighthotel-btn": 2312474,
    "insurance-btn": 2312907,
  };

  const articlecatidMapping = {
    "hotel-btn": 213873,
    "flight-btn": 213874,
    "tour-btn": 213875,
    "flighthotel-btn": 213892,
    "insurance-btn": 213890,
  };

  function showLoading() {
    fetchContentModule.innerHTML = `<div class="flex justify-center mt-20 mb-24"><span class="loader-fetch"></span></div>`;
  }

  function executeScripts(container) {
    container.querySelectorAll("script[src]").forEach(script => {
      let newScript = document.createElement("script");
      newScript.src = script.src;
      newScript.type = script.type;
      document.body.appendChild(newScript);
    });
  }

  async function fetchAndLoadContent(url) {
    try {
      showLoading();
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.text();
      fetchContentModule.innerHTML = data;
      executeScripts(fetchContentModule);
    } catch (error) {
      console.error("مشکل در دریافت داده:", error);
      fetchContentModule.innerHTML = `<p>مشکلی در دریافت اطلاعات رخ داد: ${error.message}</p>`;
    }
  }

  fetchAndLoadContent(`/module-load-items.bc?catid=213870&module=hotel&id=2375544&faqcatid=2375547&articlecatid=213873`);

  reserveBtn.forEach(item => {
    item.addEventListener("click", function () {
      for (const className in classMapping) {
        if (item.classList.contains(className)) {
          let catid = classMapping[className];
          let module = className.replace("-btn", "");
          let id = idMapping[className] || "default";
          let faqcatid = faqcatidMapping[className];
          let articlecatid = articlecatidMapping[className];

          fetchAndLoadContent(`/module-load-items.bc?catid=${catid}&module=${module}&id=${id}&faqcatid=${faqcatid}&articlecatid=${articlecatid}`);
          break;
        }
      }
    });
  });
}

