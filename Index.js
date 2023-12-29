var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true, //свойство для центрирования слайдов
    grabCursor: true, //курсор в виде руки
    loop: true, // безконечное листание
    speed: 800,
    navigation: { // кнопки влево-вправо
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },
    spaceBetween: 10, //gap
    pagination: { 
      el: ".swiper-pagination", //элемент HTML, который будет использоваться для отображения пагинации.
      clickable: true, // позволяет кли кать по точкам/индикаторам пагинации
    },
  });
  var paginationElement = document.querySelector(".swiper-pagination");

// Добавляем стили через объект style
paginationElement.style.bottom = "2vw";