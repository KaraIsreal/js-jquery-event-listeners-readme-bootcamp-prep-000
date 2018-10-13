//define functions here
function getIt(){
  $('p').on('click', function(key){
  alert("Hey!")
});
}

function frameIt(){
  $('img').on('load', function(){
  $(this).addClass('tasty')
});
}

function pressIt(){
  $(document).on('keydown', function(input){
    if (key.which == 71){
      alert();
    }
  });
}




$(document).ready(function(){

// call functions here

});
