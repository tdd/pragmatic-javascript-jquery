$(document).ready(function() {
	// START:MAIN
	$("a.toggler", "#items").live("click", function(e) {
		var trigger = $(this);
		var content = trigger.parent("p").next("div");
		if (!content.length) { return; }
		content.toggle();
		trigger.text(content.is(":visible") ? "Close" : "Open");
		trigger.blur();
		return false;
	});

	$("#items").find("li").each(function() {
		$(this).prepend('<p><a href="#" class="toggler">Open</a></p>');
		$(this).children("div").hide();
	});
	// END:MAIN
});
