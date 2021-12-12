window.onscroll = () =>  {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "15px 5px";
        document.querySelector('#logo').style.display = 'none';
        $('.navbar').addClass('opColor');
    } else {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.querySelector('#logo').style.display = 'block';
        $('.navbar').removeClass('opColor');
    }
};

window.addEventListener('scroll', () => {
  // About
  let about = document.querySelector('#about-page');
  let aboutPositionTop = about.getBoundingClientRect().top;

  // Product
  let product = document.querySelector('#product-page');
  let productPositionTop = product.getBoundingClientRect().top;

  // Gallery
  let gallery = document.querySelector('#gallery-page');
  let galleryPositionTop = gallery.getBoundingClientRect().top;

  let innerScreen = window.innerHeight / 1;

  if (aboutPositionTop < innerScreen) {
    about.classList.add('page-active');
  } else {
    about.classList.remove('page-active');
  }

  if (productPositionTop < innerScreen) {
    product.classList.add('page-active')
  } else {
    product.classList.remove('page-active');
  }

  if (galleryPositionTop < innerScreen) {
    gallery.classList.add('page-active')
  } else {
    gallery.classList.remove('page-active');
  }

})

$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

  $(".nav-item a").on('click', function(event) {
    if (this.hash !== "") {          
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 10, function() {
        window.location.hash = hash;
      });
    }
  });

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
      // Add smooth scrolling to all links
      $(".nav-item a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
});
