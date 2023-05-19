import AccordionPlagin from './../libs/accordion-plagin.min.js';

export default function stages() {
  // const accordion = new AccordionPlagin('.accordion', '.accordion__item', '.accordion__content', 'active', 'active', {
  //     initialActiveItem: true,
  //     initialActiveItemIndex: 0,
  //     anyActiveItems: false,
  //     itemPaddingTop: 10,
  //     itemPaddingBottom: 20  
  // });

  // accordion.accordInit(); 

 // Using JavaScript
var cardWraps = document.getElementsByClassName("services-stages__card-wrap");

Array.from(cardWraps).forEach(function(cardWrap) {
  cardWrap.addEventListener("click", function() {
    // Remove active classes from all elements
    Array.from(cardWraps).forEach(function(element) {
      element.classList.remove("services-stages__card-wrap--active");
      element.querySelector(".services-stages__card-text").classList.remove("services-stages__card-text--active");
      element.querySelector(".services-stages__card-txt").classList.remove("services-stages__card-txt--active");
    });

    // Add active classes to the clicked element
    cardWrap.classList.add("services-stages__card-wrap--active");
    cardWrap.querySelector(".services-stages__card-text").classList.add("services-stages__card-text--active");
    cardWrap.querySelector(".services-stages__card-txt").classList.add("services-stages__card-txt--active");
  });
});

document.addEventListener("click", function(event) {
  var target = event.target;
  var isCardWrap = target.classList.contains("services-stages__card-wrap");

  if (!isCardWrap) {
    // Remove active classes from all elements
    Array.from(cardWraps).forEach(function(element) {
      element.classList.remove("services-stages__card-wrap--active");
      element.querySelector(".services-stages__card-text").classList.remove("services-stages__card-text--active");
      element.querySelector(".services-stages__card-txt").classList.remove("services-stages__card-txt--active");
    });
  }
});



}



// export default function stages() {
//   // // Get all the blocks with the services-stages__card-wrap class
//   // const cardWraps = document.querySelectorAll('.services-stages__card-wrap');

//   // // Function to close all open blocks and remove '--active' classes
//   // function closeAllBlocks() {
//   //   cardWraps.forEach((wrap) => {
//   //     wrap.classList.remove('services-stages__card-wrap--active');
//   //     const cardText = wrap.querySelector('.services-stages__card-text');
//   //     const cardTxt = wrap.querySelector('.services-stages__card-txt');
//   //     if (cardText && cardTxt) {
//   //       cardText.classList.remove('services-stages__card-text--active');
//   //       cardTxt.classList.remove('services-stages__card-txt--active');
//   //     }
//   //   });
//   // }

//   // // Attach click event listeners to each block
//   // cardWraps.forEach((cardWrap) => {
//   //   cardWrap.addEventListener('click', () => {
//   //     closeAllBlocks();

//   //     // Activate the clicked block
//   //     cardWrap.classList.add('services-stages__card-wrap--active');
//   //     const clickedCardText = cardWrap.querySelector('.services-stages__card-text');
//   //     const clickedCardTxt = cardWrap.querySelector('.services-stages__card-txt');
//   //     if (clickedCardText && clickedCardTxt) {
//   //       clickedCardText.classList.add('services-stages__card-text--active');
//   //       clickedCardTxt.classList.add('services-stages__card-txt--active');
//   //     }
//   //   });
//   // });

//   // // Attach mouseleave event listener to the document to close all blocks when cursor is moved outside
//   // document.addEventListener('mouseleave', closeAllBlocks);


// }