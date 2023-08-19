export default function counter() {

  if (document.getElementById('counter')) {
    function isElementVisible(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    function startCounter(element, maxValue) {
      let count = 0;
      const interval = setInterval(() => {
        if (count <= maxValue) {
          element.textContent = count;
          count++;
        } else {
          clearInterval(interval);
        }
      }, 20); // интервал в миллисекундах
    }
    const counterBlocks = document.querySelectorAll('[id^="counter"]');
  
    counterBlocks.forEach(counterBlock => {
      const countElements = counterBlock.querySelectorAll('.count');
      
      if (countElements.length > 0) {
        const contextValues = Array.from(countElements).map(element => parseInt(element.getAttribute('data-context')));
        let counterStarted = false;
        
        window.addEventListener('scroll', () => {
          if (isElementVisible(counterBlock) && !counterStarted) {
            countElements.forEach((element, index) => {
              startCounter(element, contextValues[index]);
            });
            counterStarted = true;
          }
        });
      }
    });
  }
}