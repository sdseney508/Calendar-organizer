//these are all of the global variables used to set and get the local storage.

var row_initial = 600; //initializing my time variable to build the time-rows off of
var date_sel = $('#date_picker'); 
var selected_date = moment().format('MM DD YYYY');  //initialize to current date.
var time_now; //initialize to null value, will be dest by displayDateTime()
var meeting_cat; //past, present, future are the three options.  set via clock and datepicker
var curr_time = $('#clock');
var meeting_day = $('#meeting-day');
var timeblocks = document.querySelector('.time-rows');  //used by buildCalendar to set the timeblocks
var p_details; // name for variable to store info about individual time blocks

document.getElementById('show-today-btn').addEventListener('click', function(){
    //resets the datepicker to current date and rebuilds the calendar.
    console.log("i clicked on show today button");
    selected_date = moment().format('MM DD YYYY');
    buildCalendar(selected_date);
    date_sel.datepicker({ dateFormat: 'dd-mm-yy'}).datepicker("setDate", new Date());
});

function displayDateTime() {
    //Set the clock and show the clock
    time_now = moment().format('HH:mm');
    curr_time.text(time_now);
}

function initializePage(){
    //intializes the date picker to current date.
    date_sel.datepicker({ dateFormat: 'mm-dd-yy'}).datepicker("setDate", new Date());
}

date_sel.datepicker({
    onSelect: function (selected_date, datepicker) {
        console.log('the selected date passed to calendar builder is: ' + selected_date);
        console.log('the selected date in moment format is: ' + moment(selected_date));
        buildCalendar(selected_date);
        return selected_date;
        }
});

function buildCalendar(t_date) {
    debugger;
    //reset the calendar by setting innerHTML for time-rows = ""
    document.getElementById('time-rows').innerHTML = '';

    //build the time blocks
    selected_date = t_date;

    //set row time for the block.  initial row time set up top.
    var row_time = Number(row_initial);
    
    for (i = 0; i < 13; i++) {
        row_time = row_time + 100;
        //make the row_id 4 characters
        if (row_time == 800 || row_time == 900 || row_time == 700){
            row_id = '0' + row_time;
        }
        else {
            row_id = row_time;
        }
    //set the initial past / present / future meeting_cat's for the row colors. 
    if (moment().format('MM DD YYYY') > selected_date) {
        meeting_cat = 'past';
    }
    else if (moment().format('MM DD YYYY') < selected_date){
        meeting_cat = 'future';
    }
    else {
        //set categories for any current day meetings
        var tcheck = moment().format('HHHH');
        if (tcheck - row_id <= 60 && tcheck - row_id >=0){
            meeting_cat = 'present';
        } 
        else if (tcheck > row_id){
            meeting_cat = 'past';
        }
        else {
            meeting_cat = 'future';
        }
    }   
        //set the unique ID's for each row.  the unique IDs get passed to localstorage to track all meetings.
        var year_now = moment(t_date).format("YYYY");
        var month_now = moment(t_date).format("MM");
        var day_now = moment(t_date).format("DD");
        meeting_id = row_id + year_now + month_now + day_now;
           
        //append a top level row container with a class of past or future, then two children div's 
        //one for the hour block so they know the time and one for the meeting itself.  
        $('#time-rows').append('<div class="row"><div class="col-1 hour-block">' + row_id + '</div>' +
        '<div class="meeting-block col-11 ' + meeting_cat + '"><textarea name=""' +
        ' id="' + meeting_id + '" class="input-area" onfocusout="setLocalStorage(id)"></textarea></div></div>');
        
        //fill in the meeting details for the time blocks from local storage.
        //here we do the initial pull.  if the pull is null, then we set the meeting block to a null value.
        p_details = JSON.parse(localStorage.getItem(meeting_id));
        
        if (p_details != null){
            document.getElementById(meeting_id).value = p_details[1];
        }
        else {
            document.getElementById(meeting_id).value = '';
        }
    }
}
    
function setLocalStorage(meeting_id) {
    //sets the local storage for a selected timeblock.  inputs are the meeting_id as built,
    //in buildCalendar and the meeting details from the textarea.
    meeting_details = document.getElementById(meeting_id).value;
    p_details = [meeting_id, meeting_details];
    localStorage.setItem(meeting_id, JSON.stringify(p_details));
}

initializePage();
setInterval(displayDateTime, 1000);
buildCalendar(selected_date);