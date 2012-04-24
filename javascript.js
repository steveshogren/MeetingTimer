

$(document).ready(function() {
    var minNumber = 1;
    var maxNumber = 10;

    var skipThese = [];

    for (var i = minNumber; i <= maxNumber; i++) {
        if ($.inArray(i, skipThese) == -1) $('#selectListID').append("<option value=\"" + i + "\">" + i + "</option>");
    }
});
$('#selectListID').change(function () {
    people = parseInt($("#selectListID option:selected").text());
});
var secondsRaw = 0;
var people = 1;
function updateTimer() {
  secondsRaw = secondsRaw + people;

  var hours = Math.floor(secondsRaw / (60 * 60));
  
  var divisor_for_minutes = secondsRaw % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);
 
  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);  

  document.getElementById("timer").firstChild.nodeValue = "business time spent: " + hours + ":" + minutes + ":" + seconds +  " people: ";
}

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

