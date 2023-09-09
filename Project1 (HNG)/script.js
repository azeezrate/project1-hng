var a = new Date();
var hours = a.getUTCHours();
var minutes = a.getUTCMinutes();
var seconds = a.getUTCSeconds();

        var weekDay = new Array(7);
        weekDay[0] = "Sunday";
        weekDay[1] = "Monday";
        weekDay[2] = "Tuesday";
        weekDay[3] = "Wednesday";
        weekDay[4] = "Thursday";
        weekDay[5] = "Friday";
        weekDay[6] = "Saturday";
        var day = weekDay[a.getDay()];
        document.getElementById("dayOfWeek").innerHTML = day;

        var nowTime = hours +":"+minutes;
        document.getElementById("utcTime").innerHTML = nowTime;

