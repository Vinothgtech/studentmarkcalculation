

// let clock =document.querySelector(".clock")

// function runclock() {
//     var time =new Date();

// let hours =time.getHours()
// let minites =time.getMinutes().toString().padStart(2,'0');
// let seconds =time.getSeconds().toString().padStart(2,'0');

// var txt ='AM';
// if (hours>12) {
//     hours=hours-12
//     txt="PM";
// }else if(hours === 0){
//  hours=12;
//  txt='AM';
// }

// hours=hours.toString().padStart(2,'0')

// clock.innerHTML=(`${hours} :${minites}:${seconds} ${txt}`);


// setInterval(runclock,1000)
   
// }
// runclock(); 

function currentt() {
    let clock =document.querySelector(".clock")
    let currenttime =new Date();
    let h =currenttime.getHours().toString().padStart(2,'0');
    let m =currenttime.getMinutes().toString().padStart(2,'0');
    let s =currenttime.getSeconds().toString().padStart(2,'0');
var txt ="PM"

 if (h>12) {
    h=h-12;
txt ='PM'
 }else if (h===0) {
    h=12;
    txt="AM"
 }

 h=h.toString().padStart(2,'0')
clock.innerHTML =`${h} :${m}:${s} ${txt}`
setInterval(currentt,1000)

}
currentt()