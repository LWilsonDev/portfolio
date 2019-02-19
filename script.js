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
    myFunction();
  var scrollTop = $(this).scrollTop();

  $('.header-container').css({

    opacity: function() {
      var elementHeight = $(this).height()/3;
      return 0 + ((elementHeight - scrollTop) / (elementHeight));
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
