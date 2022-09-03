const slider = document.querySelector(".range-slider");
const price = document.querySelector(".value");
const pageView = document.querySelector(".page-value");
const toggle = document.querySelector(".toggle");
const period = document.querySelector(".period");
let num = 0;
toggle.checked = false;

let rangeValue = Number(slider.value);
slider.addEventListener("input", () => {
  slider.style.backgroundImage = `linear-gradient(to right, #a2f2e9 , #f1f5fe )`;
});

slider.onchange = verify;

function verify() {
  if (!toggle.classList.contains("active")) {
    if (slider.value == 2) {
      num = 8;
      pageView.textContent = "10K";
      price.textContent = `$${num.toFixed(2)}`;
    } else if (slider.value == 4) {
      num = 12;
      pageView.textContent = "50K";
      price.textContent = `$${num.toFixed(2)}`;
    } else if (slider.value == 6) {
      num = 16;
      pageView.textContent = "100K";
      price.textContent = `$${num.toFixed(2)}`;
    } else if (slider.value == 8) {
      num = 24;
      pageView.textContent = "500K";
      price.textContent = `$${num.toFixed(2)}`;
    } else if (slider.value == 10) {
      num = 36;
      pageView.textContent = "50M";
      price.textContent = `$${num.toFixed(2)}`;
    }
  } else if (toggle.classList.contains("active")) {
    if (slider.value == 2) {
      num = 6;
      pageView.textContent = "10K";
      price.textContent = `$${num.toFixed(2)}`;
    } else if (slider.value == 4) {
      num = 9;
      pageView.textContent = "50K";
      price.textContent = `$${num.toFixed(2)}`;
    } else if (slider.value == 6) {
      num = 12;
      pageView.textContent = "100K";
      price.textContent = `$${num.toFixed(2)}`;
    } else if (slider.value == 8) {
      num = 18;
      pageView.textContent = "500K";
      price.textContent = `$${num.toFixed(2)}`;
    } else if (slider.value == 10) {
      num = 27;
      pageView.textContent = "50M";
      price.textContent = `$${num.toFixed(2)}`;
    }
  }
  slider.style.backgroundImage = `linear-gradient(to right, #a2f2e9 ${rangeValue}%, #f1f5fe ${rangeValue}%)`;
}

toggle.addEventListener("input", () => {
  if (toggle.checked === true) {
    toggle.classList.add("active");
    period.textContent = "/ year";
  } else {
    toggle.classList.remove("active");
    period.textContent = "/ month";
  }
  verify();
});
