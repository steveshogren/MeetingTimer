$(document).ready(function() {
    var minNumber = 1,
        maxNumber = 20,
        secondsRaw = 0,
        people = 1,
        skipThese = [],
        roundToTens = function(num) {
            return (num < 10 ? "0" : "") + num;
        },
        updateTimer = function() {
            secondsRaw = secondsRaw + people;
            var hours = Math.floor(secondsRaw / (60 * 60)),
                divisor_for_minutes = roundToTens(secondsRaw % (60 * 60)),
                minutes = roundToTens(Math.floor(divisor_for_minutes / 60)),
                divisor_for_seconds = roundToTens(divisor_for_minutes % 60),
                seconds = roundToTens(Math.ceil(divisor_for_seconds));

            $("#timer").text("Business time spent: " + hours + ":" + minutes + ":" + seconds);
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

function updateClock ( )
{
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    // Update the time display
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

