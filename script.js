$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
});

// <button onclick="myFunction()">Click me</button>


  function envelope('open') {
    onclick()
    alert('Button was clicked!');
  }
