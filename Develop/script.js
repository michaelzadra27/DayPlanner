var timeDisplayEl = $('#time-display');
const currentTime =







setInterval(function() {
    var currentTime =moment();
     $("#time-display").html(moment().format(`[Currrent Time and Date: <br>] dddd, MMMM Do YYYY, h:mm:ss a`));
     return currentTime
 }, 1000);

 console.log(currentTime)