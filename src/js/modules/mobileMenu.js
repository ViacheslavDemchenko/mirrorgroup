export default function mobileMenu() {

    if(document.getElementById('menu__button')) {
        const hamburger = document.getElementById('menu__button');
        const mobileMenu = document.querySelector('.nav-wrap');
        const mobileMenuItems = document.querySelectorAll('.nav ul li a');
        const htmlElement = document.getElementsByTagName('html')[0];
        const mobileSubmenuLink = document.querySelector('.menu-header-item__submenu');
        const mobileSubmenu = document.querySelector('.sub-menu');

        const body = document.body;
        let screenWidth = window.innerWidth;


        if (screenWidth < 1024) {
          let count = 0;
          // console.log(count);

          mobileSubmenuLink.addEventListener('click', (e) => {
            if (count === 0) {
              e.preventDefault();
              mobileSubmenuLink.classList.add('menu-header-item__submenu--active');
              mobileSubmenu.classList.add('sub-menu--active');
              count++;
              // console.log(count);
            } else {

            }
          });
        }

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('nav-wrap--active');
            body.classList.toggle('no-scroll');
            htmlElement.classList.toggle('no-scroll');
        });

        window.addEventListener('resize', () => {
            screenWidth = window.innerWidth;

            if (screenWidth < 1024) {
                linksClick();
            }
    
            if (screenWidth >= 1024) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('nav-wrap--active');
                body.classList.remove('no-scroll');
                htmlElement.classList.remove('no-scroll');
            } 
        });

        function linksClick() {
            mobileMenuItems.forEach(link => {
                link.addEventListener('click', (e) => {
                  console.log(e.target);

                    if (screenWidth < 1024) {

                      if (e.target.classList.contains('menu-header-item-link__submenu')) {
                        return;
                      } else {
                        hamburger.classList.remove('active');
                        mobileMenu.classList.remove('nav-wrap--active');
                        body.classList.remove('no-scroll');
                        htmlElement.classList.remove('no-scroll');
                      }
                    }
                });
            });
        }
        linksClick();
    }
}
