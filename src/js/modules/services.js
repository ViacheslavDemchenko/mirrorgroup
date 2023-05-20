// import AccordionPlagin from './../libs/accordion-plagin.min.js';

export default function services() {
    // const accordion = new AccordionPlagin('.accordion', '.accordion__item', '.accordion__content', 'active', 'active', {
    //     initialActiveItem: true,
    //     initialActiveItemIndex: 0,
    //     anyActiveItems: false,
    //     itemPaddingTop: 10,
    //     itemPaddingBottom: 20
    // });

  if ( document.querySelectorAll('.accordion__stage')) {
    // Get all elements with the accordion__stage class
    const stages = document.querySelectorAll('.accordion__stage');

    // Add event listeners to each accordion stage
    stages.forEach(stage => {
      stage.addEventListener('click', handleClick);
      stage.addEventListener('mouseleave', handleMouseLeave);
    });

    function handleClick(event) {
      const stage = event.currentTarget;
      const content = stage.querySelector('.accordion__stage-content');

      // Toggle accordion__stage--active class
      stage.classList.toggle('accordion__stage--active');

      // Toggle accordion__stage-content--active class
      if (content) {
        content.classList.toggle('accordion__stage-content--active');
      }

      // Adjust margin-bottom of all accordion__stage elements
      stages.forEach(stage => {
        const contentHeight = stage.querySelector('.accordion__stage-content').clientHeight;
        // stage.style.marginBottom = contentHeight + 'px';
      });
    }

    function handleMouseLeave() {
      // Remove accordion__stage--active class from all stages
      stages.forEach(stage => {
        stage.classList.remove('accordion__stage--active');
      });

      // Remove accordion__stage-content--active class from all contents
      const contents = document.querySelectorAll('.accordion__stage-content');
      contents.forEach(content => {
        content.classList.remove('accordion__stage-content--active');
      });

      // Reset margin-bottom of all accordion__stage elements to 4rem
      // stages.forEach(stage => {
      //   stage.style.marginBottom = '4rem';
      // });
    }

  }







  




}
