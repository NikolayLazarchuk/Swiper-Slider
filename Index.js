var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true, //свойство для центрирования слайдов
    grabCursor: true, //курсор в виде руки
    loop: true, // безконечное листание
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