//import { User } from './user';


//Affichage du menu quand click sur le logo
$('.menu_logo').click( function(){
  valeur = $('#menu').css('display');
  if($windSize < 600){
    if (valeur == 'none'){
      $('#menu').css("display", "flex");
    }
    else{
      $('#menu').css("display", "none");
    }
  }else{
  }
});

