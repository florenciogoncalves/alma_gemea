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

export { bornDay, setFormValidation };
