// $("#text-area-9am").css({"background-color": "yellow", "border": "2px solid red"})

let timeDisplayEl = $("#currentDay");
let timeBlockEl = $('block-display');

function displayTime(){
    let rightNow = moment().format('DD MMM YYYY [at] hh:mm a')
    timeDisplayEl.text(rightNow)
}
setInterval(displayTime, 1000);

