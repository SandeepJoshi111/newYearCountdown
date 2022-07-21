const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const newYear = '1 Jan 2023';

function countdown()
{
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate-currentDate)/1000;

    const days = Math.floor(totalSeconds/86400);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60)  % 60;
    const seconds = Math.floor(totalSeconds) %60; 


    day.innerHTML=days;
    hour.innerHTML=formatTime(hours);
    min.innerHTML=formatTime(minutes);
    sec.innerHTML=formatTime(seconds);


    console.log(days,hours,minutes,seconds);
}

function formatTime(time)
{
    return time <10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);