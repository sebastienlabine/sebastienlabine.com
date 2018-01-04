$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

function animations() {
    $('.me').animateCss('zoomIn', function () {
        $(".description").animateCss('fadeIn');
        $(".school").animateCss('fadeIn');
        $('.name').animateCss('fadeIn', function () {
            $(".social-media").animateCss('fadeInUp');
          });
      });
}

var sideMenu;
var isOpen = false;
$(document).ready(function(){
    animations();
    
    sideMenu = function() {
        if(!isOpen){
            $('#side-menu').css('width',"200px");
            $('#side-menu').css('position','fixed')
            $('#side-menu .exit').css('display','block')
            isOpen = true;
        } else {
            $('#side-menu').css('width',"0px");
            $('#side-menu .exit').css('display','none')
            isOpen = false;
        }
    }
 });
