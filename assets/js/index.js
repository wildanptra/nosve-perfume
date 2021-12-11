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
    
    $('.nav-item a .btnAbout').click(function(e) {
  // Add smooth scrolling to all links

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
});
});
