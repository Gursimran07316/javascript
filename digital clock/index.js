function clock(){
const currentTime = new Date();
var hours = currentTime.getHours()
var mins = currentTime.getMinutes()
var secs = currentTime.getSeconds()

if(hours < 10){
    hours = "0" + hours;
}
if(mins < 10){
    mins = "0" + mins;
}
if(secs < 10){
    secs = "0" + secs;
}
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = ':' + mins;
document.getElementById('seconds').innerHTML = ':' + secs;
}

setInterval(clock, 1000);