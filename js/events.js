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

function pressIt(){
$("form").on("submit", function() {
    alert('your form is going to be submitted now');
  }
});


$(document).ready(function(){

// call functions here

});
