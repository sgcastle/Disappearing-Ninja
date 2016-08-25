$(document).ready(function(){
	$(".ninja_box").on('click',function(){
		$(this).fadeOut("slow");
	});

	$("#restore_button").on('click',function(){
		$(".ninja_box").fadeIn();
	});

	// $( ".ninja_box" ).on('click',function( event ) {
	//   event.preventDefault();
	//   $( this ).hide();
	// });
});
