export default function tabsBlog() {

  if (document.querySelector('.tabs')) {
    // Get all tab elements
    const tabs = document.querySelectorAll('.tab');

    // Get all consult__inner-center elements
    const blocks = document.querySelectorAll('.tab-content');


    // Add click event listener to each tab
    tabs.forEach((tab, index) => {

      tab.addEventListener('click', () => {
        // Remove tab--active class from all tabs
        tabs.forEach((tab) => {
          tab.classList.remove('tab--active');
        });

        // Remove consult__inner-center--active class from all blocks
        blocks.forEach((block, i) => {
          block.classList.remove('tab-content--active');
        });

        // Add tab--active class to the clicked tab
        tab.classList.add('tab--active');

        // Add consult__inner-center--active class to the corresponding block
        blocks[index].classList.add('tab-content--active');

      });
    });
    
  }
}