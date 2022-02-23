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

(function() {
  const myCollapseEl = document.getElementById('navbarSupportedContent');
  if (!myCollapseEl) {
    return;
  }

  const navbar = document.querySelector('.header .navbar');
  
  const closedElements = document.querySelectorAll('.header .close.show');
  myCollapseEl.addEventListener('show.bs.collapse', function () {
    navbar.classList.add("show");
    for (let el of closedElements) {
      el.classList.remove("close");
    }
  });
  myCollapseEl.addEventListener('hide.bs.collapse', function () {
    navbar.classList.remove("show");
    for (let el of closedElements) {
      el.classList.add("close");
    }
  });
})();

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


//Card Toolip
(function() {
  const toolipToggle = document.querySelector('.card__shops-link');
  const toolipBody = document.querySelector('.card__shops-body');

  if (toolipToggle) {
    toolipToggle.onclick = function() {
      toolipBody.classList.toggle('show');
    }
  }
})();

//Card add to favorit
(function() {
  const addBtn = document.querySelector('.button--add');

  if (addBtn) {
    addBtn.onclick = function() {
      if (addBtn.classList.contains('added')) {
        addBtn.classList.remove('added');
        addBtn.innerHTML = '<span class="button--add-icon"><svg width="17" height="16" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg"><path d="M2.30581 2.27702C4.4681 0.0309206 8.14524 0.100063 10.3494 2.30425L10.8083 2.77149L11.2671 2.31263C13.4713 0.100063 17.1485 0.0309206 19.3108 2.27702C20.3207 3.32681 20.8785 4.73085 20.8644 6.18747C20.8503 7.64409 20.2654 9.03707 19.2353 10.0671L18.6738 10.6286L11.0891 18.2134C11.0521 18.2505 11.0081 18.2799 10.9598 18.2999C10.9114 18.32 10.8596 18.3303 10.8072 18.3303C10.7549 18.3303 10.703 18.32 10.6547 18.2999C10.6063 18.2799 10.5624 18.2505 10.5254 18.2134L2.38124 10.0671C1.35122 9.03707 0.766318 7.64409 0.752214 6.18747C0.73811 4.73085 1.29593 3.32681 2.30581 2.27702Z"/></svg></span> Додати до обраного'
      } else {
        addBtn.classList.add('added');
        addBtn.innerHTML = '&#10003; Товар успішно додан до обраного!'
      }
    }
  }
})();

//Card counter
(function() {
  const counter = document.querySelector('.card__add-counter');

  if (counter) {
    const btnPlus = counter.querySelector('.card__add-btn.plus');
    const btnPMinus = counter.querySelector('.card__add-btn.minus');
    const input = counter.querySelector('.card__count');
    btnPlus.onclick = function() {
      if (input.value < 100) {
        input.value= Number(input.value) + 1;
      } else {
        input.value = 100;
      }
    };

    btnPMinus.onclick = function() {
      if (input.value > 1) {
        input.value-=1;
      } else {
        input.value = 1;
      }
    };

    input.oninput = function() {
      if (input.value > 100) {
        input.value = 100;
      }
      if (input.value < 1) {
        input.value = 1;
      }
    };
  }
})();

//Cart functions
//Cart registration
(function() {
  const enterBlock = document.querySelector('.enter__block');
  if (!enterBlock) {
    return
  }
  const singinButton = document.querySelector('.enter__button-aut');
  const singinBlock = document.querySelector('.enter__autorisaiton');
  const singupButton = document.querySelector('.enter__button-reg');
  const singupBlock = document.querySelector('.enter__registration');
  const closeButton = document.querySelectorAll('button[data-bs-dismiss="modal"]');

  singinButton.onclick = function() {
    enterBlock.style.display = "none";
    singinBlock.style.display = "block";
  };
  singupButton.onclick = function() {
    enterBlock.style.display = "none";
    singupBlock.style.display = "block";
  };

  for (let button of closeButton) {
    button.onclick = function() {
      enterBlock.style.display = "block";
      singinBlock.style.display = "none";
      singupBlock.style.display = "none";
    }
  }
})();

//Product Sum
const sumFunction = function() {
  const sum = document.querySelector('.cart__total-price > .sum');
  const sumProduct = document.querySelectorAll('.cart__total');
  let totalSum = 0;
  for (let i = 0; i < sumProduct.length; i+=1) {
    totalSum = totalSum + Number(sumProduct[i].innerHTML.replace(/\D+/g,""));
    console.log(totalSum);
  }
  sum.innerHTML = totalSum + ' грн.';
};

(function() {
  const counters = document.querySelectorAll('.cart__row--product');

  if (!counters) {
    return;
  }

  for (let counter of counters) {
    const btnPlus = counter.querySelector('.card__add-btn.plus');
    const btnPMinus = counter.querySelector('.card__add-btn.minus');
    const input = counter.querySelector('.card__count');
    const price = counter.querySelector('.cart__price').innerHTML.replace(/\D+/g,"");
    const sale = counter.querySelector('.cart__sale').innerHTML.replace(/\D+/g,"")/100;
    const total = counter.querySelector('.cart__total');
    let sum = price;

    const cartSum = function() {
      sum = (price - (price*sale))*input.value;
      total.innerHTML = Math.round(sum) + ' грн.';
    };

    btnPlus.onclick = function() {
      if (input.value < 100) {
        input.value= Number(input.value) + 1;
      } else {
        input.value = 100;
      }
      cartSum();
      sumFunction();
    };

    btnPMinus.onclick = function() {
      if (input.value > 1) {
        input.value-=1;
      } else {
        input.value = 1;
      }
      cartSum();
      sumFunction();
    };

    input.oninput = function() {
      if (input.value > 100) {
        input.value = 100;
      }
      if (input.value < 1) {
        input.value = 1;
      }
      cartSum();
    };
  }
})();

//Cart sum 
(function() {
  const counters = document.querySelectorAll('.card__count');
  if (!counters) {
    return;
  }
  const btns = document.querySelectorAll('.card__add-btn');
  

  for (let count of counters) {
    count.oninput = function() {
      sumFunction();
    }
  }
})();

//Del card

(function() {
  const products = document.querySelectorAll('.cart__row--product');
  if (!products) {
    return;
  }
   for (let product of products) {
    const del = product.querySelector('.button--del');
    del.onclick = function() {
      product.remove();
      sumFunction();
    }
  };
})();

(function() {
  const payForm = document.querySelector('.order__form--pay');

  if (!payForm) {
    return;
  }

  //Pay add comment
  const textShowButton = payForm.querySelector('.order__label--text');
  const buttonSymbol = textShowButton.querySelector('.symbol');
  const textarea = payForm.querySelector('.order__textarea');

  textShowButton.onclick = function() {
    if(textShowButton.classList.contains('show')) {
      textShowButton.classList.remove('show');
      buttonSymbol.innerHTML = '&#43;';
      textarea.style.display = 'none';
    } else {
      textShowButton.classList.add('show');
      buttonSymbol.innerHTML = '&#8722;';
      textarea.style.display = 'block';
    }
  };

  const deliveryButtons = payForm.querySelectorAll('.delivery-btn');

  for (let deliveryButton of deliveryButtons) {
    deliveryButton.previousElementSibling.oninput = function() {
      if (deliveryButton.previousElementSibling.checked) {
        deliveryButton.nextElementSibling.style.display = "block";
      } else {
        deliveryButton.nextElementSibling.style.display = "none";
      }
    }
  }
})();