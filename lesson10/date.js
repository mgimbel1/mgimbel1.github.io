function setDate() {

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var dateC = new Date();

    var day = days[dateC.getDay()];
    var month = months[dateC.getMonth()];

    var date = `${day}, ${dateC.getDate()} ${month} ${dateC.getFullYear()}`;

    document.getElementById("date").innerHTML = date;
}
window.onload=setDate();
