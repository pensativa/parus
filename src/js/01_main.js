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