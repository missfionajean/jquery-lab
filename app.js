const hideItem = (button, id) => {
	$(button).click(function () {
		$(box).show();
		$(this).hide();
	});
};

// start with full tray warning hidden
$("#full").hide();

// game loop
$(document).ready(function () {
    // cookie tray logic
	let max = 10;
	let rate = 1;
	let count = 0;
	$("#bake").click(function () {
		for (let r = 0; r < rate; r++) {
			if (count < max) {
				$("#display-case").append(
					"<img src='images/choc-chip.png' alt='cookie' height='50px' width='50px'>"
				);
				count += 1;
			} else {
				$("#full").show();
			}
		}
	});

    // upgrade tray logic
    let trayCost = 10
    $("#u-tray button").click(function () {
        if (count >= trayCost) {
            max += 10
            count -= trayCost
            for (let t = 0; t < trayCost; t++) {
                $("#display-case :last-child").remove()
            }
            trayCost += 10
            $("#u-tray p").text(`Cost: ${trayCost} Cookies`)
            $("#full").hide();
        }
    })

    // upgrade oven logic
    let ovenCost = 30
    $("#u-oven button").click(function () {
        if (count >= ovenCost) {
            rate += 1
            count -= ovenCost
            for (let o = 0; o < ovenCost; o++) {
                $("#display-case :last-child").remove()
            }
            ovenCost += 25
            $("#u-oven p").text(`Cost: ${ovenCost} Cookies`)
            $("#full").hide();
        }
    })
});
