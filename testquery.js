$(document).ready(function() {
	$("h1").click(function(){
		//$("p").toggle();
		$("p").css({"color":"red", "background-color":"yellow"});
		$("p").css({"border":"25px"});
	});
	$("#p1").click(function(){
		$(".p234").toggle();
		$("img").toggle();
	});
});
