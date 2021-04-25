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
// var formText = $('#testBtn')
// var savetextcontent = $('testBtn')

// console.log("********")
// console.log(savetextcontent)
// console.log("********")
// //console.log(savetextcontent)
// //

// //console.log(formEl)
// //console.log(formValue)
// //savetextcontent.on('click', saveInput)
// $('.saveBtn').on('click', saveInput)

// function saveInput(){
//     console.log("Check Button")
//     console.log(formText.val)
//     localStorage.setItem("Item", formText.val)
// }



setInterval(function() {
    var currentTime =moment();
     $("#time-display").html(moment().format(`[Currrent Time and Date: <br>] dddd, MMMM Do YYYY, h:mm:ss a`));
   
     return currentTime
 }, 1000)


 //console.log(scheduleTime.data.number)
//working for loop 
//   function addPast (){
//       if (scheduleTime[1].data.number > rightNow){
//     // for (i = 0; i < classHandler.length; i++) {
//         $(classHandler).each(function(){
//         //  $(this).classList.add('past')
//         console.log(this)
//         });
//     //   }
//       console.log("math doesn't")
//     }
//     else if (scheduleTime = rightNow ){
//         for (i = 0; i < classHandler.length; i++)
//             classHandler[i].classList.add('present')
//     }
// }
//     else  {
//         for (i = 0; i < classHandler.length; i++) {
//             classHandler[i].classList.add('future')
//     }
//   }

  //addPast();

  //classHandler.forEach(ChangeClasses(dataset))

// function ChangeClasses(data){
//     classHandler[3].classList.add('future')

//     }

// ChangeClasses();

// function timeCheck(){
//  if (scheduleTime < rightNow){
//     addPast();
   
//  }
//  else if (scheduleTime === rightNow){
//      console.log()
//  }
// }




  
//timeCheck();
  


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

 function Background() {
    $(scheduleTime).each(function() {
            console.log("!!", this.dataset.number, rightNow)
            // console.log("KK", this.dataset)
            console.log(this)
            if (this.dataset.number < rightNow) {
                $(this).addClass('past')
                $(this).removeClass('future')
                $(this).removeClass('present')
            } else if (this.dataset.number > rightNow) {
                $(this).addClass('future')
                $(this).removeClass('present')
                $(this).removeClass('past')
            } else if (this.dataset.number === rightNow) {
                $(this).addClass('present')
                $(this).removeClass('past')
                $(this).removeClass('future')
            }
            // console.log(this.dataset.number)
        })
        // console.log("Past", Past)
        // console.log("future", future)
        // console.log("Present", Present)
        // console.log("##", Past === future, Past === Present)
}
Background();

// $(document).ready(function () {
//     // saveBtn click listener 
//     $(".saveButton").on("click", function () {
//         // Get nearby values of the description in JQuery
//         var text = $(this).siblings(".description").val();
//         var time = $(this).parent().attr("id");
//         // Save text in local storage
//         localStorage.setItem(time, text);
//     })}