$(document).ready(function() {
    var minNumber = 1,
    h_current = -1,
    m1_current = -1,
    m2_current = -1,
    s1_current = -1,
    s2_current= -1,
    maxNumber = 20,
    secondsRaw = 0,
    people = 1,
    skipThese = [],
    roundToTens = function(num) {
        return (num < 10 ? "0" : "") + num;
    },
    roundTo = function(number, to) {
        return Math.round(number * to) / to;
    },
    updateTimer = function() {
        secondsRaw = secondsRaw + people;
        var hours = Math.floor(secondsRaw / (60 * 60)),
        divisor_for_minutes = roundToTens(secondsRaw % (60 * 60)),
        minutes = roundToTens(Math.floor(divisor_for_minutes / 60)),
        divisor_for_seconds = roundToTens(divisor_for_minutes % 60),
        seconds = roundToTens(Math.ceil(divisor_for_seconds)),
        dollars = roundTo(.011 * secondsRaw, 100);

        updateFlip(hours, minutes/10, minutes%10, seconds/10, seconds%10);
    },

    flip = function (upperId, lowerId, changeNumber, pathUpper, pathLower){
		    var upperBackId = upperId+"Back";
		    $("#" + upperId).attr("src", $("#" + upperBackId).attr("src"));
		    $("#" + upperId).css("height", "64px");
		    $("#" + upperId).css("visibility", "visible");
		    $("#" + upperBackId).attr("src", pathUpper+parseInt(changeNumber)+".png");
		    
		    $("#" + lowerId).attr("src", pathLower+parseInt(changeNumber)+".png");
		    $("#" + lowerId).css("height", "0px");
		    $("#" + lowerId).css("visibility", "visible");
		    
		    var flipLower = new Fx.Tween(lowerId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
		    flipLower.addEvents({
				    'complete': function(){	
						    lowerBackId = lowerId+"Back";
						    $("#" + lowerBackId).attr("src", $("#" + lowerId).attr("src"));
						    $("#" + lowerId).css("visibility", "hidden");
						    $("#" + upperId).css("visibility", "hidden");
				    }
        });					
		    var flipUpper = new Fx.Tween(upperId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
		    flipLower.start('height', 64);
		    flipUpper.start('height', 0);
    },
    updateFlip = function (hours, minTens, minOnes, secTens, secOnes) {
		    //change pads
		    if( hours != h_current){
			      flip('hoursUp', 'hoursDown', hours, 'Single/Up/', 'Single/Down/');
			      h_current = hours;
		    }
		    if( minOnes != m2_current || minTens != m1_current){
			      flip('minutesUpRight', 'minutesDownRight', minOnes, 'Double/Up/Right/', 'Double/Down/Right/');
			      m2_current = minOnes;
			      
			      flip('minutesUpLeft', 'minutesDownLeft', minTens, 'Double/Up/Left/', 'Double/Down/Left/');
			      m1_current = minTens;
		    }
		    if (secOnes != s2_current || secTens != s1_current){
			      flip('secondsUpRight', 'secondsDownRight', secOnes, 'Double/Up/Right/', 'Double/Down/Right/');
			      s2_current = secOnes;
			      
			      flip('secondsUpLeft', 'secondsDownLeft', secTens, 'Double/Up/Left/', 'Double/Down/Left/');
			      s1_current = secTens;
		    }
    },
    init = function() {
        for (var i = minNumber; i <= maxNumber; i++) {
            if ($.inArray(i, skipThese) == -1) $('#selectListID').append("<option value=\"" + i + "\">" + i + "</option>");
        }
        updateTimer();
        setInterval(updateTimer, 1000);
    };
    init();
    $('#selectListID').change(function () {
        people = parseInt($("#selectListID option:selected").text());
    });
    $('#resetButton').click(function () {
        secondsRaw = 0;
    });
});

