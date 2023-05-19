import AccordionPlagin from './../libs/accordion-plagin.min.js';

export default function accordion() {
    // const accordion = new AccordionPlagin('.accordion', '.accordion__item', '.accordion__content', 'active', 'active', {
    //     initialActiveItem: true,
    //     initialActiveItemIndex: 0,
    //     anyActiveItems: false,
    //     itemPaddingTop: 10,
    //     itemPaddingBottom: 20
    // });

    // accordion.accordInit();

  // Получаем все элементы с классом accordion__item
  const accordionItems = document.querySelectorAll('.accordion__item');

  // Перебираем каждый элемент accordion__item
  accordionItems.forEach((item, index) => {
    // Получаем дочерний элемент с классом accordion__content
    const content = item.querySelector('.accordion__content');

    // Добавляем обработчик события клика
    item.addEventListener('click', () => {
      // Проверяем, есть ли класс active у текущего элемента и его дочернего элемента
      const isActive = item.classList.contains('active');
      const isContentActive = content.classList.contains('active');

      // Удаляем класс active у всех элементов с классом accordion__item и accordion__content
      accordionItems.forEach(item => item.classList.remove('active'));
      document.querySelectorAll('.accordion__content').forEach(content => {
        content.classList.remove('active');
        content.style.height = 0;
      });

      // Добавляем или удаляем класс active в зависимости от наличия у текущего элемента и его дочернего элемента
      if (!isActive) {
        item.classList.add('active');
        content.classList.add('active');
        content.style.height = `${content.scrollHeight}px`; // Устанавливаем плавную высоту элемента через scrollHeight
      }
    });

    // Изначально первый элемент аккордеона активен
    if (index === 0) {
      item.classList.add('active');
      content.classList.add('active');
      content.style.height = `${content.scrollHeight}px`; // Устанавливаем плавную высоту элемента через scrollHeight
    }
  });


}
