var sideMenu;
var isOpen = false;
$(document).ready(function(){
    sideMenu = function() {
        if(!isOpen){
            $('#side-menu').css('width',"200px");
            $('#side-menu i.fa.fa-times-circle-o').css('display','block')
            isOpen = true;
        } else {
            $('#side-menu').css('width',"0px");
            $('#side-menu i.fa.fa-times-circle-o').css('display','none')
            isOpen = false;
        }
    } 
 });