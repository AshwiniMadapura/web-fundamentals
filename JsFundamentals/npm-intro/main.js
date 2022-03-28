// import luxon from "luxon";
// const rightNow=luxon.DateTime.now();
// console.log(rightNow);

// const anotherDate=luxon.DateTime.fromISO("2021-07-17");
// console.log(anotherDate);

// const timeInFewHours= rightNow.plus({hour:3,minutes:29});
// console.log(timeInFewHours);
import figlet from "figlet";
figlet.text('Boo!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});