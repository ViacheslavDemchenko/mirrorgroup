export default function tabsBlog() {

  if (document.querySelector('.blog-center')) {
    const tabButtons = document.querySelectorAll('.blog-center__inner-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listener to each tab button
    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Remove active class from all tab buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('blog-center__inner-tab--active'));
        tabContents.forEach(content => content.classList.remove('tab-content--active'));

        // Add active class to the clicked tab button and corresponding content
        button.classList.add('blog-center__inner-tab--active');
        tabContents[index].classList.add('tab-content--active');
      });
    });
    
  }
}