var timeDisplayEl = $('#time-display');

//const currentTime = 
var RowEl = document.getElementById('addColornow')
var appTime= document.querySelector('#getTime');
var appValue= appTime.dataset.number
var rightNow = moment().format('h')
var scheduleTime = 


console.log("+++++++++")
console.log(RowEl)
console.log("+++++++++")

console.log(appTime)
console.log(appValue)

console.log(rightNow)

 function addPast (){
     RowEl.classList.add('past')

 }

function timeCheck(){
 if (appValue < rightNow){
    addPast();
    console.log("&&&&&&&&&&")
 }
 else if (appValue === rightNow){
     console.log()
 }
}

 setInterval(function() {
     var currentTime =moment();
      $("#time-display").html(moment().format(`[Currrent Time and Date: <br>] dddd, MMMM Do YYYY, h:mm:ss a`));
    
      return currentTime
  }, 1000)
 
  //addColor();
  timeCheck();
  console.log("+++++++++++")
  //console.log(currentTime)
  console.log("+++++++++++")



//Call current
//Use JQuery to get div
//creat variable in for loop for div
//For Loop to loop over div
//compare to current time
//save time from app in one variable
//save actual time in different variable
//create if, else if, else
//Based on time add/remove class and use for loop to touch each one








 //console.log(currentTime)