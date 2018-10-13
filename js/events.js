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
  $(document).on('keydown', function(key){
    if (key.which == 71){
      alert();
    }
  });
}

$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
});

$(document).ready(function(){

// call functions here

});
