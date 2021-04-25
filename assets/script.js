var timeDisplayEl = $('#time-display');

//const currentTime = 
//var RowEl = document.getElementById('addColornow')
//var appTimeEl= document.querySelector('#getTime');
var scheduleTime= $('textarea')
// scheduleTime = $('textarea')
// console.log(scheduleTime)
var rightNow = moment().format('H')
var classHandler = document.querySelectorAll('.content')

//var state = ("data-number");


console.log('LLLLLLLLLL')
console.log(scheduleTime)
//console.log(classHandler)
console.log('LLLLLLLLLL')
//console.log(getTime.dataset)
// Testing Forms
//var formEl = document.getElementById('formcontent')
//var formValue = formEl.value
//

//Testing button
//  var formText = $('#testingform')





//  $('.saveBtn').on('click', saveInput)

//  function saveInput(){
//      console.log("Check Button")
//     console.log(formText.val)
//     localStorage.setItem("Item", formText.val)
//  }

//Handles saving the contect of each row to the local storage

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var itemKey = $(this).parent().attr("id")
        var itemValue = $(this).siblings(".content").val();
        localStorage.setItem(itemKey, itemValue);

       
    })})

setInterval(function() {
    var currentTime =moment();
     $("#time-display").html(moment().format(`[Currrent Time and Date: <br>] dddd, MMMM Do YYYY, h:mm:ss a`));
   
     return currentTime
 }, 1000)


 

//Call current
//Use JQuery to get div
//creat variable in for loop for div
//For Loop to loop over div
//compare to current time
//save time from app in one variable
//save actual time in different variable
//create if, else if, else
//Based on time add/remove class and use for loop to touch each one








 //handles assigning the past,present,future classes dynamically based on whether the current time value is greater or lesser than the dataset index 

 function Background() {
    $(scheduleTime).each(function() {
            console.log(this)
            if (this.dataset.number < rightNow) {
                $(this).addClass('past')
               
            } else if (this.dataset.number > rightNow) {
                $(this).addClass('future')
                
            } else if (this.dataset.number === rightNow) {
                $(this).addClass('present')
               
            }
            // console.log(this.dataset.number)
        })
        
}
Background();

$("#8 .content").val(localStorage.getItem("8"));
$("#9 .content").val(localStorage.getItem("9"));
$("#10 .content").val(localStorage.getItem("10"));
$("#11 .content").val(localStorage.getItem("11"));
$("#12 .content").val(localStorage.getItem("12"));
$("#13 .content").val(localStorage.getItem("13"));
$("#14 .content").val(localStorage.getItem("14"));
$("#15 .content").val(localStorage.getItem("15"));
$("#16 .content").val(localStorage.getItem("16"));
$("#17 .content").val(localStorage.getItem("17"));
$("#18 .content").val(localStorage.getItem("18"));

