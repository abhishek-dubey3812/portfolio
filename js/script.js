$(function(){
        $('#menu').slicknav({
            'label' : '',
            'brand' : 'Portfolio'
        });
    });

    
    document.addEventListener("DOMContentLoaded", function () {
      // Typing Effect
      const typedElement = document.querySelector(".typed");
      if (typedElement) {
          const typedItems = typedElement.getAttribute("data-typed-items").split(",");
          let currentItem = 0;
          let charIndex = 0;
          let isDeleting = false;
    
          function typeEffect() {
              let currentText = typedItems[currentItem];
              if (isDeleting) {
                  typedElement.textContent = currentText.substring(0, charIndex - 1);
                  charIndex--;
              } else {
                  typedElement.textContent = currentText.substring(0, charIndex + 1);
                  charIndex++;
              }
    
              if (!isDeleting && charIndex === currentText.length) {
                  isDeleting = true;
                  setTimeout(typeEffect, 2000);
              } else if (isDeleting && charIndex === 0) {
                  isDeleting = false;
                  currentItem = (currentItem + 1) % typedItems.length;
                  setTimeout(typeEffect, 500);
              } else {
                  setTimeout(typeEffect, isDeleting ? 50 : 100);
              }
          }
          typeEffect();
      }
    });      
      
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:100,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                992:{
                    items:5,
                    nav:true,
                    loop:true
                }
            }
        });
      });
      