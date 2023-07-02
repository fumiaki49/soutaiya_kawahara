window.addEventListener('DOMContentLoaded',function(){
  function scroll_effect() {
    let hide_elements = document.getElementsByClassName('fadeIn-content_scroll');
    let scrollY = window.pageYOffset;
    let windowH = window.innerHeight;
    let showTiming = 50;
  
    for (i=0; i < hide_elements.length; i++) {
      let elemClientRect = hide_elements[i].getBoundingClientRect(); 
      let elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {
        hide_elements[i].classList.add('is-show');
      }
    }
  }

  window.addEventListener('scroll', scroll_effect);
});

