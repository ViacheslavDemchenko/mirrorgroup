export default function mobileMenu() {

    if(document.getElementById('menu__button')) {
        const hamburger = document.getElementById('menu__button');
        const mobileMenu = document.querySelector('.nav__header');
        const mobileMenuItems = document.querySelectorAll('.nav ul li a');
        const htmlElement = document.getElementsByTagName('html')[0];

        const body = document.body;
        let screenWidth = window.innerWidth;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('nav__header--active');
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
                mobileMenu.classList.remove('nav__header--active');
                body.classList.remove('no-scroll');
                htmlElement.classList.remove('no-scroll');
            } 
        });

        function linksClick() {
            mobileMenuItems.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (screenWidth < 1024) {
                        hamburger.classList.remove('active');
                        mobileMenu.classList.remove('nav__header--active');
                        body.classList.remove('no-scroll');
                        htmlElement.classList.remove('no-scroll');
                    }
                });
            });
        }
        linksClick();
    }
}
