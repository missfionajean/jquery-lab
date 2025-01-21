// function definitions
const container = (id, button, counter) => {
	$(button).click(function () {
		counter += 1;
		$(id).text(counter);
	});
};

const buyContainer = (button, box) => {
    $(button).click(function () {
		$(box).show()
        $(this).hide()
	});
}

// start extra cookies hidden
$(".unlock").hide()

// game loop
$(document).ready(function () {
    // define counters
	let ccCount = 0;
    let sgCount = 0;
    let snCount = 0;
    let otCount = 0;

    // event handlers to add new boxes
    buyContainer("#buy-sg", "#sg-box")
    buyContainer("#buy-sn", "#sn-box")
    buyContainer("#buy-ot", "#ot-box")

    // set event handlers for cookie boxes
	container("#cc-count", "#cc-btn", ccCount);
	container("#sg-count", "#sg-btn", sgCount);
	container("#sn-count", "#sn-btn", snCount);
	container("#ot-count", "#ot-btn", otCount);
});
