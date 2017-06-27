

//$=== jQuery

jQuery(document).ready(function(){

	alert('jQuery is not working')

		$("#hide").click(function(){
				$("#image").hide();
		});

		$("#Show").click(function(){
				$("#image").show();
		});
		$("#explode").click(function(){
			$("#image").hide("explode", {pieces: 16}, 2000)();
		});

	$("#fadein").click(function(){
		$("#image").fadeIn(5000);

	});
		$("#fadeout").click(function(){
		$("#image").fadeOut(5000);

});

	$("#flip").click(function(){
    $("#UpDown").toggle(fadein, fadeout);
});

});

