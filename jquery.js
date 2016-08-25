$(document).ready(function(){
	var ninjas = '';
	for (var i = 0; i < 8; i++) {
		ninjas += '<div class="ninja_box">'+i+'</div>'
	}
	$('#proj_title').append(ninjas);
	
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
