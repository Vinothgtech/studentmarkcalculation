setInterval(runclocks ,1000)
const hours =document.querySelector('.hrs')
const minites =document.querySelector('.min')
const section =document.querySelector('.sec')

function runclocks(){

const currentdate =new Date()

const sec =currentdate.getSeconds()/60;
const min =(sec+currentdate.getMinutes())/60;
const hrs =(min+currentdate.getHours())/12;

hours.style.setProperty('--rotation', hrs*360)
minites.style.setProperty('--rotation',min*360)
section.style.setProperty('--rotation',sec*360)




console.log('hii');
}
runclocks()