import mapData from './../data/mapData.json';


export default function data() {

  
  console.log(mapData);


  const locations = document.querySelectorAll('.location');
  const locationDescWrap = document.querySelector('.location-desc__wrap');
  const geographyInnerRightImg = document.querySelector('.geography__inner-right__img');

  locations.forEach(location => {
    location.addEventListener('mouseover', () => {
      const locationBounds = location.getBoundingClientRect();
      const geographyInnerRightImgBounds = geographyInnerRightImg.getBoundingClientRect();
      const x = locationBounds.left - geographyInnerRightImgBounds.left + locationBounds.width / 2;
      const y = locationBounds.top - geographyInnerRightImgBounds.top + locationBounds.height / 2;
 
      locationDescWrap.style.top = y - 260 + 'px';
      locationDescWrap.style.left = `${x}px`;
      locationDescWrap.style.display = 'block';
  });

  // location.addEventListener('mouseout', () => {
  //   locationDescWrap.style.display = 'none';
  // });
});

  // const locations = document.querySelectorAll('.location'); // получаем все элементы с классом location

  // locations.forEach(location => { // перебираем каждый элемент
  //   location.addEventListener('mouseover', () => { // вешаем событие на наведение курсора
  //     const { x, y } = location.getBoundingClientRect(); // получаем координаты элемента
  //     console.log(`${x}, ${y}`); // выводим координаты в консоль
    
  //     const locationDesc = document.querySelector('.location-desc__wrap'); // получаем элемент с классом location-desc__wrap

  //     locationDesc.style.display = 'block'; // добавляем ему свойство display: block
  //     locationDesc.style.top = `${y}px`; // устанавливаем позицию по вертикали
  //     locationDesc.style.left = `${x}px`; // устанавливаем позицию по горизонтали
  // });

  // location.addEventListener('mouseout', () => { // вешаем событие на выход курсора
  //   const locationDesc = document.querySelector('.location-desc__wrap'); // получаем элемент с классом location-desc__wrap

  //   locationDesc.style.display = 'none'; // удаляем свойство display: block
  // });
// });

  // const locations = document.querySelectorAll('.location');

  // locations.forEach(location => {
  //   location.addEventListener('mouseover', function(event) {
  //     const x = event.target.offsetLeft;
  //     const y = event.target.offsetTop;
  //     console.log(`Координаты: (${x}, ${y})`);
  //   });
  // });


 



//  // Create an empty array to store the JSON elements
//   const jsonElements = [];

//   // Function to generate a random number between min and max (inclusive)
//   function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   // Generate 32 JSON elements
//   for (let i = 0; i < 32; i++) {
//     const id = i + 1; // Incrementing ID starting from 1
//     const imageLink = `./assets/img/location_img_${id}.png`; // Example image link
//     const text = `This is element ${id}`; // Example text
    
//     // Create the JSON element object
//     const element = {
//       id: id,
//       image: imageLink,
//       text: text
//     };

//     // Push the element to the array
//     jsonElements.push(element);
//   }

//   // Convert the array to JSON string
//   const jsonString = JSON.stringify(jsonElements);

//   // Print the JSON string
//   console.log(jsonString);

  

  

}