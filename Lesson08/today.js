var today = new Date();

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var dateString = today.toLocaleDateString("en-GB", options);
document.getElementById('currentDate').textContent = dateString;
