// import phoneMask from './../modules/phoneMask';

export default function modal() {
  // Get the service__icon elements
  const serviceIcons = document.querySelectorAll('.service__icon');

  // Get the modal elements
  const modalAsk = document.querySelector('.modal-ask');
  const modalCall = document.querySelector('.modal-call');
  const modalWrite = document.querySelector('.modal-write');

  // Get the close elements
  const closeElements = document.querySelectorAll('.close');

  // Get the wrapper and body elements
  const wrapper = document.querySelector('.wrapper');
  const html = document.documentElement;

  // Add event listeners to service__icon elements
  serviceIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      // Add active class to the corresponding modal element
      if (index === 0 || index === 3 || index === 6) {
        modalAsk.classList.add('modal-ask--active');
      } else if (index === 1 || index === 4 || index === 7) {
        modalCall.classList.add('modal-call--active');
      } else if (index === 2 || index === 5 || index === 8) {
        modalWrite.classList.add('modal-write--active');
      }

      // Add overlay class to the wrapper element
      wrapper.classList.add('overlay');

      // Add no-scroll class to the body element
      html.classList.add('no-scroll');
    });
  });

  // Add event listeners to close elements
  closeElements.forEach((close) => {
    close.addEventListener('click', () => {
      // Remove active classes from modal elements
      modalAsk.classList.remove('modal-ask--active');
      modalCall.classList.remove('modal-call--active');
      modalWrite.classList.remove('modal-write--active');

      // Remove overlay class from the wrapper element
      wrapper.classList.remove('overlay');

      // Remove no-scroll class from the body element
      html.classList.remove('no-scroll');
    });
  });

  // Add event listener to wrapper element
  // wrapper.addEventListener('click', () => {
  //   // Remove overlay class from the wrapper element
  //   wrapper.classList.remove('overlay');

  //   // Remove no-scroll class from the body element
  //   body.classList.remove('no-scroll');
  // });


}