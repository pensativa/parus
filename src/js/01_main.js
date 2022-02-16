//Header scripts
const changeHeaderOnScroll = function() {
  const header = document.querySelector('.header');
  if(window.pageYOffset > 0) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
};

const showMenu = function() {
  const btn = document.querySelector('.nav-contacts__button');
  const header = document.querySelector('.header');
  btn.onclick = function() {
    if (header.classList.contains('show')) {
      header.classList.remove('show');
    } else {
      header.classList.add('show');
    }
  };
};
showMenu();

const showFooterMenu = function() {
  const links = document.querySelectorAll(".footer__link-dropped");

  for (let link of links) {
    link.onclick = function() {
      link.classList.toggle("show");
    };
  }
};
showFooterMenu();

//Button to top

const scrollToTop = function() {
  const up = document.getElementById('to-top');
  if(window.pageYOffset > 100) {
    up.style.display = 'block';
  } else {
    up.style.display = 'none';
  }

  up.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
};

window.onscroll = function() {
  scrollToTop();
  changeHeaderOnScroll();
};

//Product scripts

const changeSmallProductsButtons = function() {
  const btns = document.querySelectorAll('.catalog__btns button');
  for (let btn of btns) {
    btn.onclick = function() {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      } else {
        btn.classList.add('active');
      }
    };
  }
};
changeSmallProductsButtons();

//Calc scripts

const fronCalculation = function() {
  const forms = document.querySelectorAll('.calc__form');
  let sum = 0;

  for (let form of forms) {
    const input = form.querySelector('.calc__input');
    const select = form.querySelector('.calc__select');
    const result = form.querySelector('.result');
    input.oninput = function() {
      sum = input.value * select.value;
      if (!sum) {
        result.innerHTML = 0;
      } else {
        result.innerHTML = sum;
      }
    };

    select.oninput = function() {
      sum = input.value * select.value;
      if (!sum) {
        result.innerHTML = 0;
      } else {
        result.innerHTML = sum;
      }
    };
  };
};
fronCalculation();

//Slider
var swiper = new Swiper(".viddel__slider", {
  slidesPerView: 1,
  grabCursor: true,
  mousewheel: true,
  hide: false,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

//Download files
const fileInputChangeText = function () {
  const file = document.querySelector('.modal-form__item--file input[type="file"]');
  const fileText = document.querySelector('.input-text');

  file.onchange = function() {
    if (file.value != '') {
      fileText.innerHTML = 'Файл вибраний';
    } else {
      fileText.innerHTML = 'Назва.pdf';
    }
  };
};
const modalForm = document.querySelector('.modal-form');
if (modalForm) {
  fileInputChangeText();
}

const fileInputChangeBg = function () {
  const files = document.querySelectorAll('.calc__clock-file');

  for (let file of files) {
    file.onchange = function() {
      const fileBg = file.parentElement;
      if (file.value != '') {
        fileBg.style.backgroundImage = "url('../img/checked.svg')";
      } else {
        fileBg.style.backgroundImage = "url('../img/plus.svg')";
      }
    };
  }
};
const calc = document.querySelector('.calc');
if (calc) {
  fileInputChangeBg();
}

//Filters
(function() {
  const parent = document.querySelector('.range-slider');

  if (!parent) {
      return;
  }

  const rangeS = parent.querySelectorAll('input[type="range"]'),
        numberS = parent.querySelectorAll('input[type="number"]');

  rangeS.forEach((el) => {
      el.oninput = () => {
          let slide1 = parseFloat(rangeS[0].value),
              slide2 = parseFloat(rangeS[1].value);

          if (slide1 > slide2) {
              [slide1, slide2] = [slide2, slide1];
          }

          numberS[0].value = slide1;
          numberS[1].value = slide2;
      }
  });

  numberS.forEach((el) => {
      el.oninput = () => {
          let number1 = parseFloat(numberS[0].value),
              number2 = parseFloat(numberS[1].value);

          if (number1 > number2) {
              let tmp = number1;
              numberS[0].value = number2;
              numberS[1].value = tmp;
          }

          rangeS[0].value = number1;
          rangeS[1].value = number2;
      }
  });
})();

(function() {
  const filterToggle = document.querySelector('.filter__toggel');
  const filterForm = document.querySelector('.filter__form');

  filterToggle.onclick = function() {
    filterForm.classList.toggle('open');
  }
})();