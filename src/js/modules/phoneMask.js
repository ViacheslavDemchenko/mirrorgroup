export default function phoneMask(input) {
    // function setMask(event) {
    //     let pressedKey;
    //     event.keyCode && (pressedKey === event.keyCode); 
    //     input.setSelectionRange(input.value.length, input.value.length);      
    //     let maskType = '+7 (___) ___-__-__',
    //         i = 0,
    //         replaceValue = maskType.replace(/\D/g, ''),
    //         prevValue = this.value.replace(/\D/g, ''),
    //         currentValue = maskType.replace(/[_\d]/g, (a) => {
    //             return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
    //         });          
    //     i = currentValue.indexOf('_');
    //     if (i != -1) {
    //         i < 5 && (i = 3);
    //         currentValue = currentValue.slice(0, i);
    //     }      
    //     let reg = maskType.substr(0, this.value.length).replace(/_+/g,
    //         function(a) {
    //             return '\\d{1,' + a.length + '}';
    //         }).replace(/[+()]/g, '\\$&');
    //     reg = new RegExp('^' + reg + '$');
    //     if (!reg.test(this.value) || this.value.length < 5 || pressedKey > 47 && pressedKey < 58) {
    //         this.value = currentValue;
    //     } else if (event.type === 'blur' && this.value.length < 5) {
    //         this.value = '';
    //     }
    //     input.setSelectionRange(input.value.length, input.value.length);
    // }
        
    // input.addEventListener('input', setMask, false);
    // input.addEventListener('focus', setMask, false);
    // input.addEventListener('blur', setMask, false);
    // input.addEventListener('keydown', setMask, false);
}