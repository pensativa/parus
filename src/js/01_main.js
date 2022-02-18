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

  if (filterToggle) {
    filterToggle.onclick = function() {
      filterForm.classList.toggle('open');
    }
  }
})();

//Toolip script
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

//Card Sliders
var swiper = new Swiper(".card__thumbs-slider", {
  spaceBetween: 10,
  slidesPerView: 3,
  direction: getDirection(),
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'horizontal' : 'vertical';

  return direction;
}

var swiper2 = new Swiper(".card__slider", {
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper3 = new Swiper(".catalog-plus__slider", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

(function() {
  const tulipToggle = document.querySelector('.card__shops-link');
  const tulipBody = document.querySelector('.card__shops-body');

  if (tulipToggle) {
    tulipToggle.onclick = function() {
      tulipBody.classList.toggle('show');
    }
  }
})();

(function() {
  const addBtn = document.querySelector('.button--add');

  if (addBtn) {
    addBtn.onclick = function() {
      if (addBtn.classList.contains('added')) {
        addBtn.classList.remove('added');
        addBtn.innerHTML = '<span class="button--add-icon">&#10084;</span> Додати до обраного'
      } else {
        addBtn.classList.add('added');
        addBtn.innerHTML = '&#10003; Товар успішно додан до обраного!'
      }
    }
  }
})();

(function() {
  const btnPlus = document.querySelector('.card__add-btn.plus');
  const btnPMinus = document.querySelector('.card__add-btn.minus');
  const counter = document.querySelector('.card__count');

  if (counter) {
    btnPlus.onclick = function() {
      if (counter.value < 100) {
        counter.value= Number(counter.value) + 1;
      } else {
        counter.value = 100;
      }
    };

    btnPMinus.onclick = function() {
      if (counter.value > 1) {
        counter.value-=1;
      } else {
        counter.value = 1;
      }
    };
  }
})();