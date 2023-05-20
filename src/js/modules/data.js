export default function data() {

  if (document.querySelector('.geography__inner-right__img')) {
    const locations = document.querySelectorAll('.location');
    const locationDescWrap = document.querySelector('.location-desc__wrap');
    const geographyInnerRightImg = document.querySelector('.geography__inner-right__img');
    const currentImg = document.querySelector('.location-desc');

    // console.log(currentImg.src);

    geographyInnerRightImg.addEventListener('mouseover', () => {
      

      locations.forEach((location, i) => {

        location.addEventListener('mouseover', (e) => {
          const number = e.target.getAttribute('data-number');
          let newSrc = location.src;

          newSrc = newSrc.replace('icons/location_1', 'geography_' + number);
          newSrc = newSrc.replace('svg', 'png');
          currentImg.src = newSrc;
          console.log(newSrc);
        

          const locationBounds = location.getBoundingClientRect();
          const geographyInnerRightImgBounds = geographyInnerRightImg.getBoundingClientRect();
          const x = locationBounds.left - geographyInnerRightImgBounds.left + locationBounds.width / 2;
          const y = locationBounds.top - geographyInnerRightImgBounds.top + locationBounds.height / 2;
          
          let screenW = window.screen.width;

          if(screenW < 1024) {
            locationDescWrap.style.top = y - 86 + 'px';
          } else if (screenW >= 1024) {
            locationDescWrap.style.top = y - 260 + 'px';
          } 
  
          locationDescWrap.style.left = `${x}px`;
          locationDescWrap.style.display = 'block';
        });
      });

    });

    geographyInnerRightImg.addEventListener('mouseleave', () => {
      locationDescWrap.style.display = 'none';
      currentImg.src = ' ';
    });
  }
}