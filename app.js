// function definitions
const cookieBox = (id, button, counter) => {
	$(button).click(function () {
		counter += 1;
		$(id).text(counter);
	});
};

const addBox = (button, box) => {
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
    addBox("#buy-sg", "#sg-box")
    addBox("#buy-sn", "#sn-box")
    addBox("#buy-ot", "#ot-box")

    // set event handlers for cookie boxes
	cookieBox("#cc-count", "#cc-btn", ccCount);
	cookieBox("#sg-count", "#sg-btn", sgCount);
	cookieBox("#sn-count", "#sn-btn", snCount);
	cookieBox("#ot-count", "#ot-btn", otCount);
});
