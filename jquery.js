$(document).ready(function(){
	$(".ninja_box").click(function(){
		$(this).fadeOut("slow");
	});

	$("#restore_button").click(function(){
		$(".ninja_box").fadeIn();
	});

	// $( ".ninja_box" ).click(function( event ) {
	//   event.preventDefault();
	//   $( this ).hide();


});
