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
  const faqAnswers = document.querySelectorAll(".faq-answer");

  faqBox.forEach((button, index) => {
    button.addEventListener("click", function () {
      const faqAnswer = faqAnswers[index];

      // بستن همه پاسخ‌ها به‌جز پاسخ انتخاب‌شده
      faqAnswers.forEach((answer, i) => {
        if (i !== index) {
          answer.classList.add("max-h-0", "opacity-0");
          answer.classList.remove("max-h-screen", "opacity-100");
        }
      });

      // باز یا بسته کردن پاسخ موردنظر
      if (faqAnswer.classList.contains("max-h-0")) {
        faqAnswer.classList.remove("max-h-0", "opacity-0");
        faqAnswer.classList.add("max-h-screen", "opacity-100");
        faqAnswer.style.marginTop = "8px";
      } else {
        faqAnswer.classList.add("max-h-0", "opacity-0");
        faqAnswer.classList.remove("max-h-screen", "opacity-100");
      }
    });
  });
});


let i = document.querySelectorAll(".ticket-article");
i.forEach((e) => {
  let t = e.querySelector(".flight-type-article").innerText.trim(),
    r = e.querySelector(".dep-text").innerText.trim(),
    i = e.querySelector(".dep-id").innerText.trim(),
    a = e.querySelector(".des-text").innerText.trim(),
    l = e.querySelector(".des-id").innerText.trim();
  e.querySelector(".set-ticket").addEventListener("click", () => {
    if (window.location.href.endsWith("/")) {
      (document.querySelector("#r-flight #flightSearch #departure1").value = r),
        (document.querySelector(
          "#r-flight #flightSearch .departure-route .locationId"
        ).value = i),
        (document.querySelector(
          "#r-flight #flightSearch .destination-route #destination1"
        ).value = a),
        (document.querySelector(
          "#r-flight #flightSearch .destination-route .locationId"
        ).value = l),
        t.includes("اکونومی") &&
          ((document.querySelector("#r-flight .FlightClass-text").innerText =
            "اکونومی"),
          (document.querySelector("#r-flight #FlightClass1").value =
            "Economy")),
        t.includes("بیزینس") &&
          ((document.querySelector("#r-flight .FlightClass-text").innerText =
            "بیزینس"),
          (document.querySelector("#r-flight #FlightClass1").value =
            "BusinessClass")),
        t.includes("فرست") &&
          ((document.querySelector("#r-flight .FlightClass-text").innerText =
            "فرست"),
          (document.querySelector("#r-flight #FlightClass1").value =
            "FirstClass")),
        document.querySelector("#r-flight").classList.remove("hidden");
      let e = document.querySelector(".bg-search");
      e && window.scrollTo({ top: e.offsetTop, behavior: "smooth" });
    } else
      localStorage.setItem(
        "flightData",
        JSON.stringify({
          depId3: i,
          desId3: l,
          departureCity2: r,
          destinationCity2: a,
          flightType2: t,
        })
      ),
        (window.location.href = "/");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    var xhrobj = new XMLHttpRequest();
    xhrobj.open("GET", "search-engine.bc");
    xhrobj.send();

    xhrobj.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var container = document.getElementById("search-box");
        container.innerHTML = xhrobj.responseText;

        var scripts = container.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          var scriptTag = document.createElement("script");
          if (scripts[i].src) {
            scriptTag.src = scripts[i].src;
            scriptTag.async = false;
          } else {
            scriptTag.text = scripts[i].textContent;
          }
          document.head
            .appendChild(scriptTag)
            .parentNode.removeChild(scriptTag);
        }
      }

      let s = JSON.parse(localStorage.getItem("flightData"));
      if (s && "/" === window.location.pathname) {
        localStorage.removeItem("searchHistory_flight");
        let {
          depId3: c,
          desId3: d,
          departureCity2: u,
          destinationCity2: p,
          flightType2: f,
        } = s;
        (document.querySelector("#flightSearch #departure1").value = u),
          (document.querySelector(
            "#flightSearch .departure-route .locationId"
          ).value = c),
          (document.querySelector(
            "#flightSearch .destination-route #destination1"
          ).value = p),
          (document.querySelector(
            "#flightSearch .destination-route .locationId"
          ).value = d),
          f.includes("اکونومی") &&
            ((document.querySelector(".FlightClass-text").innerText =
              "اکونومی"),
            (document.querySelector("#FlightClass1").value = "Economy")),
          f.includes("بیزینس") &&
            ((document.querySelector(".FlightClass-text").innerText = "بیزینس"),
            (document.querySelector("#FlightClass1").value = "BusinessClass")),
          f.includes("فرست") &&
            ((document.querySelector(".FlightClass-text").innerText = "فرست"),
            (document.querySelector("#FlightClass1").value = "FirstClass")),
          document.querySelector("#r-flight").classList.remove("hidden");
        let h = document.querySelector(".bg-blur-t");
        h && window.scrollTo({ top: h.offsetTop, behavior: "smooth" });
      }
    };
  } catch (error) {
    // console.error('مشکلی رخ داده است لطفا صبور باشید.', error);
  }
});