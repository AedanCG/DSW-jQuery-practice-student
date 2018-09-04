$(document).ready(function() {
	$("h1").click(function(){
		//$("p").toggle();
		$("p").css({"color":"red", "background-color":"yellow"});
		$("img").css({"border":"2px solid red"});
	});
	$("#p1").click(function(){
		$(".p234").toggle();
		$("img").toggle();
	});
});
