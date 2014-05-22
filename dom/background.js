(function() {

	// START:MAIN
	var CHUNK_INTERVAL = 25;
	var running = false, progress = 0, processTimer;
	
	function runChunk() {
		window.clearTimeout(processTimer);
		processTimer = null;
		if (!running) return;
		// Some work chunk.  Let's simulate it:
		for(var i = 0; i < 1000; i += Math.round((Math.random() * 5))) {
			// $("#log").append(progress + " ");
		}
		++progress;
		updateUI(); // updates progressbar
		if (progress < 100) {
			processTimer = window.setTimeout(runChunk, CHUNK_INTERVAL);
		} else {
			progress = 0, running = false;
		}
	}
	
	function toggleProcessing() {
		running = !running;
		if (running) {
			processTimer = window.setTimeout(runChunk, CHUNK_INTERVAL);
		}
	}
	// END:MAIN

	var progressbar, visual, figure;

	function updateUI() {
		visual.css("width", progress + "%");
		progressbar[progress < 50 ? "removeClass" : "addClass"]("over50");
		figure.html(progress + "%");
	}

	$(document).ready(function() {
		$("#btnToggle").bind("click", toggleProcessing);
		$("#btnOtherTask").bind("click", function() {
			$("h1").first().append(", yeah");
		});
		progressbar = $("#progress");
		visual = progressbar.find(".visual");
		figure = progressbar.find(".figure");
	});

})();
