const cron = require("node-cron");
const fs = require("fs");

cron.schedule('* * * * * *', () => {
    fs.appendFile("./file.txt", "\n", function (err) {
        if (err) {
            throw err;
        }
    });

    var time = new Date();
    var LocalTime = "Current local time is " + time.toLocaleTimeString();
    console.log("Cron Job for 1 second started")
    console.log(time);

    fs.appendFile("./file.txt", LocalTime, function (err) {
        if (err) {
            throw err;
        }
    });
});