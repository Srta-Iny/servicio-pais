 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
   $('.carousel.carousel-slider').carousel({full_width: true});

 $(document).ready(function(){
      $('.carousel').carousel();
    });
       
   // Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);
      
 $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });	