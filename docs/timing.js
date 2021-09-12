
var _sDaysOfTheWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

var _sMainTime = new Date();

function hoursPastSunRise(d) {
    var dayMins = (d.getHours() * 60) + d.getMinutes();
    var dawnMins = (6 * 60) + 49; // 6:49 AM, TODO: make this dynamic
    var deltaMins = (dayMins - dawnMins);
    if (deltaMins < 0) {
        deltaMins += (24 * 60);
    }
    var deltaHours = (deltaMins / 60);
    return deltaHours;
}

function dayOfTheWeek(d) {
    var n = d.getDay();
    var name = _sDaysOfTheWeek[n];
    return name;
}

function titleLocalTime() {
    var d = _sMainTime;
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
    datestring += "<br/>" + dayOfTheWeek(d);
    datestring += "<br/>" + d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2);
    datestring += "<br/>" + hoursPastSunRise(d).toFixed(1) + "h past sunrise";
    return datestring;
}

function timingDetails() {
    var items = [];
    items.push({
        title : "Day",
        icon : "calendar",
        subtitle : "Sun",
        desc : "experiments regarding temporal wealth, hope, gain, fortune, divination, the favour of princes, to dissolve hostile feeling, and to make friends.",
    });
    items.push({
        title : "Hour",
        icon : "hourglass-start",
        subtitle : "Mercury",
        desc : "eloquence and intelligence, promptitude in business, science and divination, etc.; in the Hours of Mercury: undertaking experiments relating to games, raillery jests, sports, etc.",
    });
    items.push({
        title : "Hour",
        icon : "hourglass-end",
        subtitle : "Jupiter",
        desc : "obtaining honours, acquiring riches, contracting friendships, preserving health.",
    });
    return items;
}

