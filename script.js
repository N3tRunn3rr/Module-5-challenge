// function to display the current date and time in the jumbotron area of the page
var time = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);
var saveBtn = document.querySelector("#saveBtn");



// this function chooses each of the text areas by their class description 
// it runs the function to compare the current hour with the time block hour 
// depending on that comparison it will add or remove the style changing classes as needed 
$('.description').each(function() {
    var currentTime = moment().hour();
    var timeBlockTime = $(this).parent().attr("id");
    console.log(currentTime)
    console.log(timeBlockTime)

    if (currentTime > timeBlockTime) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future'); 
    } 
    else if (currentTime == timeBlockTime) {
        $(this).removeClass('past');
        $(this).addClass('present');
        $(this).removeClass('future');
    } 
    else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
});

// this saves the text content within a linked text area to local storage 
$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        localStorage.setItem($(this).parent().attr("id"), $(this).siblings('.description').val());
        console.log(localStorage.getItem($(this).prop("description")));
    })
});

// when the page is refreshed or loaded it will repopulate the text areas with the content that was stored locally via save button 
$('#9 > .description').val(localStorage.getItem('9'))
$('#10 > .description').val(localStorage.getItem('10'))
$('#11 > .description').val(localStorage.getItem('11'))
$('#12 > .description').val(localStorage.getItem('12'))
$('#13 > .description').val(localStorage.getItem('13'))
$('#14 > .description').val(localStorage.getItem('14'))
$('#15 > .description').val(localStorage.getItem('15'))
$('#16 > .description').val(localStorage.getItem('16'))
$('#17 > .description').val(localStorage.getItem('17'))



localStorage.setItem("#description", "description.textContent");

function init(event) {
    event.preventDefault();
}





