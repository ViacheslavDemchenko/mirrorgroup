export default function location() {

  // Get all elements with the location class
  const locations = document.querySelectorAll('.location');
  const descriptionWrap = document.querySelector('.location-desc__wrap');

  // Iterate over each location element
  locations.forEach(location => {
    // Get the corresponding location-desc__wrap element
    // const descriptionWrap = location.querySelector('.location-desc__wrap');

    // Add event listener for mouseenter (hover)
    location.addEventListener('mouseenter', () => {
      // Add the location-desc__wrap--active class
      descriptionWrap.classList.add('location-desc__wrap--active');
    });

    // Add event listener for mouseleave
    location.addEventListener('mouseleave', () => {
      // Remove the location-desc__wrap--active class
      descriptionWrap.classList.remove('location-desc__wrap--active');
    });
  });

}