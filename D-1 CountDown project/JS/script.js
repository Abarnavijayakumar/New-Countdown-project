
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')


function UpdateClock(params) {

 const CurrentYear = new Date().getFullYear();
  const newYear = new Date(`january 1 ${CurrentYear + 1} 00:00:00`);
//  const newYear = new Date(Date.UTC(CurrentYear + 1, 0, 1, 0, 0, 0)); // UTC time for New Year

 
 const CurrentDate = new Date();
 const diffrent = newYear - CurrentDate;
 const Days = Math.floor(diffrent / 1000 / 60 / 60 / 24);
 const Hours = Math.floor((diffrent / 1000 / 60 / 60) % 24);
 const Minutes = Math.floor((diffrent / 1000 / 60) % 60);
 const Seconds = Math.floor((diffrent / 1000) % 60);
//  console.log(`Days: ${Days}, Hours: ${Hours}, Minutes: ${Minutes}, Seconds: ${Seconds}`); // Debugging

    days.innerHTML = Days < 10 ? "0" + Days : Days;
    hours.innerHTML = Hours < 10 ? "0" + Hours : Hours;
    minutes.innerHTML = Minutes < 10 ? "0" + Minutes : Minutes;
    seconds.innerHTML = Seconds < 10 ? "0" + Seconds : Seconds;
}
UpdateClock();
setInterval(UpdateClock, 1000);


// console.log(diffrent); // getting output like current gives milliseconds in js 20827502220

// finding number of days c.l(diff /1000/60/60/24) like this
/* 1000ms = 1s
60s = 1m
60m = 1hr
24hrs = 1day */



