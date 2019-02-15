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
  $(window).scroll(function() {
    
  var scrollTop = $(this).scrollTop();

  $('.header-container').css({

    opacity: function() {
      var elementHeight = $(this).height();
      return 0 + ((elementHeight - scrollTop) / (elementHeight));
    }
  });
  


    
    
    
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(800,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}