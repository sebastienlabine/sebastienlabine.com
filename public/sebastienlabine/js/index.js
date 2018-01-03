var sideMenu;
var isOpen = false;
$(document).ready(function(){
    sideMenu = function() {
        if(!isOpen){
            $('#side-menu').css('width',"200px");
            $('#side-menu .exit').css('display','block')
            isOpen = true;
        } else {
            $('#side-menu').css('width',"0px");
            $('#side-menu .exit').css('display','none')
            isOpen = false;
        }
    } 
 });