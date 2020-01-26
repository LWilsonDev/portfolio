
/*
Code Acknowlegments:
Many thanks to these generous developers who provide inspiration and knowledge!

- Vanga bird animation (https://www.vantajs.com/)
- Sticky Nav (https://codepen.io/aklima/pen/oeyjLd)
- Fade In Animation Library (https://michalsnik.github.io/aos/)
- Panel colour change on scroll (https://codepen.io/daveredfern/pen/zBGBJV)

*/
$(document).ready(function() {
    console.log( "ready!" );



// Sticky navbar code found
// =========================
            
                // Custom function which toggles between sticky class (is-sticky)
                var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
                    var stickyHeight = sticky.outerHeight();
                    var stickyTop = stickyWrapper.offset().top;
                    if (scrollElement.scrollTop() >= stickyTop) {
                        stickyWrapper.height(stickyHeight);
                        sticky.addClass("is-sticky");
                    }
                    else {
                        sticky.removeClass("is-sticky");
                        stickyWrapper.height('auto');
                    }
                };

                // Find all data-toggle="sticky-onscroll" elements
                $('[data-toggle="sticky-onscroll"]').each(function () {
                    var sticky = $(this);
                    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
                    sticky.before(stickyWrapper);
                    sticky.addClass('sticky');

                    // Scroll & resize events
                    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                        stickyToggle(sticky, stickyWrapper, $(this));
                    });

                    // On page load
                    stickyToggle(sticky, stickyWrapper, $(window));
                });

 

 //end panel code

  

});