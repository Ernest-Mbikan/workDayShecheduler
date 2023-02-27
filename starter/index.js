// Display Elements
let timeDisplayEl = $("#currentDay");
let timeBlockEl = $('block-display');
let saveBtn = document.querySelectorAll('.saveBtn') ;
let workHour    = [9, 10, 11, 12, 13, 14, 15, 16, 17];

document.querySelector("#currentDay").textContent = moment().format('DD MMM YYYY [at] hh:mm a');
for (var i = 0; i < 9; i++) {
    //getting hour from each time slot and compares it to actual time
  if (currentHour === workHour[i]) {
   
    document.getElementById(i).classList.add("present");
  }
  if (currentHour > workHour[i]) {
   
    document.getElementById(i).classList.add("past");
  }
  if (currentHour < workHour[i]) {
   
    document.getElementById(i).classList.add("future");
  }


  // accessing key name according to id + repop. data from local storage
   if(localStorage.getItem(i)){
    event.preventDefault();
       document.getElementById(i).value = localStorage.getItem(i);
  }

   saveBtn[i].addEventListener("click",function(){
    event.preventDefault();
    let id = this.getAttribute("data-id");
    let text = document.getElementById(id).value;
     localStorage.setItem(id,text);
 })
 }

