
var _sDaysOfTheWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

function dayOfTheWeek(d) {
    var n = d.getDay();
    var name = _sDaysOfTheWeek[n];
    return name;
}

function titleLocalTime() {
    var d = (new Date());
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + "<br/>";
    datestring += d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2);
    datestring += "<br/>" + dayOfTheWeek(d);
    return datestring;
}

