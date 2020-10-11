const daysEl =document.getElementById('days');

const hoursEl = document.getElementById("hours"); 

const minsEl =document.getElementById("mins");

const secondsEl =document.getElementById('seconds');

const newYears = '1 Jan 2021';

function countDown(){

    const newYearsDate= new Date(newYears);

    const currentDate=new Date();

    const totalSeconds=(newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24 );

    const hours =   Math.floor(totalSeconds / 3600 ) % 24;

    const minuts= Math.floor(totalSeconds / 60 )  % 60;

    const second =  Math.floor(totalSeconds)%60 ;

    daysEl.innerHTML=formateTime(days);

    hoursEl.innerHTML=formateTime(hours);

    minsEl.innerHTML=formateTime(minuts);

    secondsEl.innerHTML=formateTime(second);

    console.log(days , hours , minuts , second);
}

function formateTime(time){

 return   time< 10 ?(`0${time}`) :time;
}
countDown();

setInterval(countDown ,1000);