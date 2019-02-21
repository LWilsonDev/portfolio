function slideIn() {
  var elem = document.getElementById('mySidenav');
  elem.style.transition = "all 1s ease-in-out";
  elem.style.width = "0px";
  
}
function slideOut() {
  var elem = document.getElementById('mySidenav');
  elem.style.transition = "all 1s ease-in-out";
  elem.style.width = "250px";
}

 

$(window).on("load",function() {
  
  
  //https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

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

  
  $(window).scroll(function() {
    myFunction();
   
    var scroll = $(window).scrollTop();

      $('.header-container').css({
        opacity: function() {
          var elementHeight = $(this).height()/3;
          return 0 + ((elementHeight - scroll) / (elementHeight));
        }
      });
  
  
   

   
  }).scroll(); //invoke scroll-handler on page-load
});




// When the user scrolls the page, execute myFunction 


// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



