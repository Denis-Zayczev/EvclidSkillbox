//акардеон
$(function() {
  $("#accordion").accordion(  {collapsible: true, active: false} );
});

//Слайдер
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      // type: 'bullets',
      clickable: 'true',
    },
    autoplay: {
      delay: 5000,
    },

    effect: 'fade',
  });
});

//меню бургер
document.addEventListener('DOMContentLoaded', function() {
  let x = document.getElementById("contain");
  x.addEventListener("click", myFunction);
  let element = document.getElementById("nav");

  const data = ["О нас", "Проекты", "Этапы", "Отзывы", "Контакты"];
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerHTML = data[i];
    li.append(a);
    element.appendChild(li);
  }

  function myFunction() {
    let element = document.getElementById("nav");
    element.classList.toggle("open");
    x.classList.toggle("change");
  }
});


//Табы
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
  });
});

//Поисковик
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".menu__input-search").addEventListener('click', function() {
    document.querySelector(".menu__button").classList.add("active");
    document.querySelector(".menu__input").classList.add("active");
    document.querySelector(".menu__input-search").classList.add("active");
    document.querySelector(".menu__input-search-close").classList.add("active");
  });

  document.querySelector(".menu__input-search-close").addEventListener('click', function() {
    document.querySelector(".menu__button").classList.remove("active");
    document.querySelector(".menu__input").classList.remove("active");
    document.querySelector(".menu__input-search").classList.remove("active");
    document.querySelector(".menu__input-search-close").classList.remove("active");
  });
});