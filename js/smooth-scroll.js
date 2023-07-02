window.addEventListener('DOMContentLoaded', function() {
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

  for( let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', function(e) {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      let mobileHeaderHight = document.getElementById('mobileHeader').clientHeight;
      let positionFromTop = targetElement.getBoundingClientRect().top;
      let offset = window.pageYOffset;
      let gap = mobileHeaderHight + 40;
      let target = positionFromTop + offset - gap;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      })
    });
  }
});