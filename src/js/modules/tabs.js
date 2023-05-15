export default function tabs() {

  if (document.querySelector('.consult')) {
    let count = 0;

    
    // Get all tab elements
    const tabs = document.querySelectorAll('.tab');

    // Get all consult__inner-center elements
    const blocks = document.querySelectorAll('.consult__inner-center');


    // Add click event listener to each tab
    tabs.forEach((tab, index) => {

      tab.addEventListener('click', () => {
        // Remove tab--active class from all tabs
        tabs.forEach((tab) => {
          tab.classList.remove('tab--active');
        });

        // Remove consult__inner-center--active class from all blocks
        blocks.forEach((block, i) => {
          block.classList.remove('consult__inner-center--active');
        });

        // Add tab--active class to the clicked tab
        tab.classList.add('tab--active');

        // Add consult__inner-center--active class to the corresponding block
        blocks[index].classList.add('consult__inner-center--active');

        if (document.querySelector('.activity-form')) {
          const titles = document.querySelectorAll('.form-title');
          const titlesTexts = [
            'Предложить участие в проекте',
            'Запросить портфолио',
            'Рассчитать стоимость проекта',
            'Задать вопрос в WhatsApp'
          ];
          
          titles.forEach(title => {
            title.classList.remove('form-title--active');
            console.log(title);
          });

          titles[index].classList.add('form-title--active');
          titles[index].textContent = titlesTexts[index];
        }
      });
    });
  }
  

}