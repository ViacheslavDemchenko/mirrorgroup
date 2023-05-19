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
      const accordionStages = document.querySelectorAll('.accordion__stage');
      const p = document.createElement('p');

    // Add event listeners to each accordion__stage element
    accordionStages.forEach(accordionStage => {
      accordionStage.addEventListener('mouseenter', () => {
          // Add click event listener to each accordion__stage element
        accordionStages.forEach(accordionStage => {
          accordionStage.addEventListener('click', () => {
            // Get the child element with the accordion__stage-content class
            const accordionContent = accordionStage.querySelector('.accordion__stage-content');

            // Get the height of the accordion__stage-text element of the child
            const textHeight = accordionStage.querySelector('.accordion__stage-text').clientHeight;
            
            const text = accordionStage.querySelector('.accordion__stage-text').textContent;
            p.textContent = text;
            accordionContent.appendChild(p);
            // console.log(text);

            // Toggle the accordion__stage-content-active class
            accordionContent.classList.toggle('accordion__stage-content--active');

            if (accordionContent.classList.contains('accordion__stage-content--active')) {
              // Set the height to the corresponding text height
              accordionContent.style.height = textHeight + 30 + 'px';
            } else {
              // Remove the height style
              accordionContent.style.height = null;
            }
          });
        });
        accordionStage.addEventListener('mouseleave', () => {
          // Code to execute when cursor leaves the accordion__stage element
          accordionStages.forEach(accordionStage => {
            const accordionContent = accordionStage.querySelector('.accordion__stage-content');
            accordionContent.classList.remove('accordion__stage-content--active');
            accordionContent.style.height = null;
            accordionContent.removeChild(p);
            p.textContent = ' ';
          });
        });

      });
    });

  }







  




}
