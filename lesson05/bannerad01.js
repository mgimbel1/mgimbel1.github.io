const thisday = new Date();
const dayNumber = thisday.getDay();


if (dayNumber == 5) {
    document.getElementById("banner").classList.add("showme");
}
else {
    document.getElementById("banner").classList.add("hideme");
}

