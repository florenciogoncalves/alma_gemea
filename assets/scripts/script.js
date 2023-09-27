// To run born day validation
if (document.location.pathname === "/") {
  const bornDay = {
    form: document.querySelector("#born-data-form"),
    day: document.querySelector("#day"),
    month: document.querySelector("#month"),
    year: document.querySelector("#year"),
    setYearOptions: function () {
      let limitData = new Date().getFullYear() - 18;
      for (let count = 0; count != 99; count++) {
        let opt = document.createElement("option");
        opt.value = limitData - count;
        opt.textContent = limitData - count;
        this.year.appendChild(opt);
      }
    },
  };
  const setFormValidation = bornDay.form.addEventListener("submit", (evt) => {
    const day = parseInt(bornDay.day.value);
    const month = parseInt(bornDay.month.value);
    const year = parseInt(bornDay.year.value);

    function invalid() {
      evt.preventDefault();
      document.querySelector("#wrong-message").classList.remove("d-none");
    }

    if (
      month === 2 &&
      day >= 29 &&
      !(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
    ) {
      if (day > 29) invalid();
      invalid();
    }
    const normalMonths = [1, 2, 4, 6, 9, 11];
    if (normalMonths.includes(month) && day > 30) invalid();
  });
  bornDay.setYearOptions();
  setFormValidation;
}

// Select gender
if (document.location.pathname === "/informacao.html") {
  document.querySelectorAll('.gender-option [type="radio"]').forEach((el) => {
    el.addEventListener("change", () => {
      document
        .querySelector(".gender .__checked")
        .classList.remove("__checked");
      el.parentElement.parentElement.classList.add("__checked");
    });
  });
}

// Loading bar
if (document.location.pathname === "/carregando-leitura.html") {
  const progressBar = document.querySelector(".loading-bar .__bar");
  const percentValue = document.querySelector(".__bar #percent-value");
  function loadingBar() {
    let percent = percentValue.value;
    progressBar.style.width = percent + "%";
  }
  percentValue.addEventListener("input", () => loadingBar());
  loadingBar();
  setInterval(loadingBar, 300);
}

// Star classification
if (document.location.pathname === "/seu-horoscopo.html") {
  document.querySelectorAll(".star-classification").forEach((el) => {
    const stars = el.querySelectorAll("li");
    const starsArray = Array.from(stars);
    stars.forEach((star) =>
      star.addEventListener("click", (evt) => {
        // Remove excess
        if (
          star.parentElement.querySelectorAll("._starred").length - 1 >
          starsArray.indexOf(star)
        ) {
          star.parentElement
            .querySelectorAll("._starred")
            .forEach((star2) => star2.classList.remove("_starred"));
          for (let count = 0; count < starsArray.indexOf(star) + 1; count++) {
            stars[count].classList.add("_starred");
          }
        }
        // Remove starred
        else if (star.classList.contains("_starred")) {
          for (let count = 0; count < starsArray.indexOf(star) + 1; count++) {
            stars[count].classList.remove("_starred");
          }
        }
        // Add starred
        else if (!star.classList.contains("_starred")) {
          for (let count = 0; count < starsArray.indexOf(star) + 1; count++) {
            stars[count].classList.add("_starred");
          }
        }
      })
    );
  });
}

// Play music and save like a pdf
if (document.location.pathname === "/sua-alma-gemea.html") {
  // Audio
  const musics = document.querySelectorAll(".music-list li");
  musics.forEach((music) => {
    music.querySelector(".play-button").addEventListener("click", () => {
      const audio = music.querySelector(".audio-element");
      musics.forEach((el) => {
        if (el != music) {
          el.querySelector(".audio-element").pause();
        }
      });
      audio.paused ? audio.play() : audio.pause();
    });
    music.querySelector(".play-button").addEventListener("dblclick", () => {music.querySelector('.audio-element').currentTime = 0});
  });
  // Save to pdf
  document.querySelectorAll('.save-to-pdf').forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('oi')
      window.print(document.querySelector('body').innerHTML)
    })
  })
}
