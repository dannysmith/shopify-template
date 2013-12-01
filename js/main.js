$(document).ready(function(){

	// Small-screen navigation toggle
	$('a.touch-navigation').click(function (){
		$('.navigation > ul').slideToggle();
		return false;
	})

});