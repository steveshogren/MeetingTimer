$(document).ready(function() {
    var minNumber = 1,
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
            

            $("#timer").text("Total time: " + hours + ":" + minutes + ":" + seconds + " dollars: " + dollars);
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
