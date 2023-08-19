require('polyfill-nodelist-foreach'); // Полифил для поддержки метода forEach в IE11+ и Safari9
require('svgxuse'); // Полифил для поддержки IE11+ и старыми браузерами использования SVG через use 

import accordion from './modules/accordion.js'; // Аккордион
import mobileMenu from './modules/mobileMenu'; // Мобильное меню
import modal from './modules/modal'; // Модалки
import slider from './modules/slider'; // Слайдер
// import location from './modules/location'; // Карта на главной
import tabs from './modules/tabs'; // Табы с формами на главной
import tabsBlog from './modules/tabs-blog'; // Табы страниц блога
// import strRun from './modules/strRun'; // Бегущая строка кнопка в header
import data from './modules/data'; 
import stages from './modules/stages'; 
import tabsVisualization from './modules/tabs-visualization'; 
import services from './modules/services'; 
import phoneMask from './modules/phoneMask'; 
import servicesSlider from './modules/services-slider'; 
import counter from './modules/counter'; 

const phones = document.querySelectorAll('.phone-mask');

// location();
tabs();
data();
// strRun();
services();
tabsVisualization();
stages();
accordion();
mobileMenu();
modal();
tabsBlog();
slider();
servicesSlider();
counter();

phones.forEach(phone => {
  phoneMask(phone);
})
