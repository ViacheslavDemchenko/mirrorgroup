import phoneMask from './../modules/phoneMask';

export default function modal() {
    // const body = document.getElementsByTagName('body')[0];
    // const overlay = document.querySelector('.overlay');
    // const btnCall = document.querySelector('.btn--call');
    // const modalCall = document.querySelector('.modal--call');
    // const modalClose = document.querySelector('.close');
    // const modalCallPhone = document.querySelector('.form-modal__phone');
    // const modalForm = document.querySelector('#form-modal');
    // const modalFormBtn = document.querySelector('.btn--form-modal__submit');

    // btnCall.addEventListener('click', modalShow);


    // function modalShow() {
    //     modalCall.style.display = 'block';
    //     setTimeout(() => {
    //         body.classList.add('no-scroll');
    //         overlay.classList.add('overlay--active');
    //         modalCall.classList.add('modal--call-active');
    //         phoneMask(modalCallPhone);
    //         formModalSend(modalForm, modalFormBtn);
    //     }, 300);
    // }

    // function modalHide() {
    //     modalCall.classList.remove('modal--call-active');
    //     setTimeout(() => {
    //         modalCall.style.display = 'none';
    //     }, 300);
    // }

    // window.addEventListener('keydown', (e) => {
    //     if (e.code === 'Escape') {
    //         if (document.querySelector('.modal')) {
    //             setTimeout(() => {
    //                 body.classList.remove('no-scroll');
    //                 overlay.classList.remove('overlay--active');
    //             }, 500);
    //             modalHide();
    //             setTimeout(() => {
    //                 modalForm.reset();
    //             }, 500);
    //         }
    //     }
    // });

    // window.addEventListener('click', (e) => {

    //     if (document.querySelector('.modal')) {
    //         if (e.target.closest('.modal')) {
    //             e.stopPropagation();
    //         } else if (e.target.closest('.overlay')) {
    //             setTimeout(() => {
    //                 body.classList.remove('no-scroll');
    //                 overlay.classList.remove('overlay--active');
    //             }, 500);
    //             modalHide();
    //         }
    //     }
    // });

    // modalClose.addEventListener('click', () => {
    //     setTimeout(() => {
    //         body.classList.remove('no-scroll');
    //         overlay.classList.remove('overlay--active');
    //     }, 500);
    //     modalHide();
    //     setTimeout(() => {
    //         modalForm.reset();
    //     }, 500);
    // });

}