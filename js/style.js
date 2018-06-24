(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();


  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
	$('.center').fadeIn(2000);
	$('.center-2').fadeIn(5000);
	$('.t-js').slideDown(4000);

  });
})(jQuery); 