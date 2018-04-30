$(document).ready(function() {


/*Annimation quand click sur bouton su menu*/
$('.container').click(function() {
$(this).toggleClass("change");
$width =$(".menu").css("width");
console.log($width);

  if ($width ==="0px"){
   $(".menu").css("width","100%");
  }else{
    $(".menu").css("width","0%");
  }

});




});


