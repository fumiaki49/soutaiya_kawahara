window.addEventListener('DOMContentLoaded',function(){
  const menuBtn = document.querySelector('#js_hamberger-btn');
  const menuMobile = document.querySelector('#menuMobile');
  const headerTitle = document.querySelector('.header-title');
  const links = document.querySelectorAll('.navigation_mobile .links-list li');
  
  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    menuMobile.classList.toggle('open');
    headerTitle.classList.toggle('open');
  });
  
  for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      menuBtn.classList.toggle('open');
      menuMobile.classList.toggle('open');
      headerTitle.classList.toggle('open');
    });
  }

});

