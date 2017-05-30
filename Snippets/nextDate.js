// write a method on instance of a date which will give you next day
Date.prototype.nextDay = function () {
    var currentDate = this.getDate();
    return new Date(this.setDate(currentDate + 1));
}

var today = new Date();
// return UTC time (Coordinated Universal Time) the greenwich meridian in London
console.log(today);
console.log(today.nextDay());