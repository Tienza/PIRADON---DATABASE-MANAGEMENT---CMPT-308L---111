function createDate() {
    var fraction = parseInt(Math.random() * 1001);
    if (fraction > 99)
        fraction = fraction;
    else if (fraction >= 10)
        fraction = "0" + fraction.toString();
    else
        fraction = "00" + fraction.toString();
    var year = parseInt(Math.random() * 1000);
    if (year > 99)
        year = year;
    else if (year > 10)
        year = "0" + year.toString();
    else
        year = "00" + year.toString();
    var m = parseInt((Math.random() * 11) + 30);
    document.getElementById('demo').innerHTML = fraction + " " + year + "." + "M" + m;
}
