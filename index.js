const date = new Date();

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "Julu",
    "Auguest",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector(".date h1").innerHTML = month[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();