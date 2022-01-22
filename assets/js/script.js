//these are all of the global variables used to set and get the local storage.

var row_time = 600; //initializing my time variable to build the time-rows off of
var date_sel = $('#date_picker');
var curr_d = new Date();
var c_day = curr_d.getDate();
var c_month = curr_d.getMonth();
var c_year = curr_d.getFullYear();
var selected_date;
var time_now;
var meeting_cat; //past, present, future are the three options.  set via clock and datepicker
var curr_time = $('#curr_time');
var timeblocks = document.querySelector('.time-rows');
var hourblock; //from the hover over event listener
var dayselected; //built from datepicker
var monthselected;  //built from date picker
var yearselected;  //built from date picker
var plannedetails = ''; //from the individual time container blocks.
var meetingtype = ''; //from the pop up form when you select on a time block.

//Overview:  
//Create a navbar with drop down type selectors to get the date for the meetings and organization info.  This opens a small drop down 
//selector form in the navbar at the top of the page.  It then uses the date info (day, month, year) selected to
//run the getLocalStorage function.  The same info plus the timeblock, meeting details (plannedetails variable), 
//and meetingtype is also used to set localstorage for future retrievals.

//first i need to populate the dropdown selectors using Jquery ui date picker.  i also want it to compare 
//if the date selected is in the future or past
//Set the clock
function displayDateTime() {
    time_now = moment().format('HH:HH');
    hour_now = moment().format('HHHH');
    // day_now = moment().format("DD");
    // month_now = moment().format("MM");
    // date_now = moment().format('MM DD YYYY');
    console.log("time_now: " + time_now);
    // console.log("Month now: "+ month_now);
    // console.log('Long date is: ' + date_now);
    curr_time.text(time_now);
    //rebuilds the calendar to change the status of the meetings as you rpogress through the day.  will only change the calendar
    //if the current day is selected.  i need to add a button to revert the day selected to today.
    if (hour_now % 100 == 0){
        buildCalendar(selected_date);
    }
    return hour_now;
}

date_sel.datepicker({
    onSelect: function (selected_date, datepicker) {
        buildCalendar(selected_date);
        return selected_date;
    },
});

console.log(selected_date);

function buildCalendar(t_date) {
    //update current hour.

    //build the time blocks
    selected_date = t_date;

    if (selected_date != "") {
        if (moment(selected_date) > moment()){
            alert("Date is in the future");
            meeting_cat = 'future';
        }
        else if (moment(selected_date) < moment()){
            meeting_cat = 'past';
        }
        else {
            meeting_cat = 'present';
        }
    }
    else {
        selected_date = moment().format('DD MM YY');
    }

    console.log("the selected date is on line 60: " + selected_date);
    for (i = 0; i < 13; i++) {
        //set row time for first block.  initial row time set up top.
        row_time = Number(row_time) + 100;

        //make ther id 4 characters
        if (row_time == 800 || row_time == 900 || row_time == 700){
            row_id = '0' + row_time;
        }
        else {
            row_id = row_time;
        }
        //
        //determine what if any of the row containers will have a class of past or future



        //append a top level row container with a class of past or future, then two children div's 
        //one for the hour block so they know the time and one for the meeting itself.  
        $('#time-rows').append('<div class="row"><div class="hour-block col-1">' + row_id + '</div>' +
        '<div class="meeting-block col-sm-11 col-md-9 col-lg-8 ' + meeting_cat + '"><textarea name=""' +
        ' id="' + row_id + '" class="input-area">type here</textarea></div></div>');
        
        //fill in the meeting details for the time blocks from local storage.
        document.getElementById
    }

    //using a loop to assign an event listener to each time block.
    document.querySelectorAll('.input-area').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault;
            if (date_sel != null) {
                alert("The timeblock ID is: " + event.target.id + ' the day of the month is: ' + date_sel);
            }
            else {
                alert("date_sel is null so we used the YYYY of time_now:" + date_sel);
            }
        })
    });
}

// //retrieves anything saved to local storage
// function getLocalStorage(dayselected, monthselected, yearselected, timeblock) {
    //     p_details = JSON.parse(localStorage.getItem("p_details"));
    // }
    
    // //sets the local storage for a selected timeblock.  inputs are the date,
    // //timeblock, entered details, and meeting color.
    // function setLocalStorage(dayselected, monthselected, yearselected, timeblock, plannerdetails, meetingtype) {
        //     p_details = { date_sel: dayselected, t_block: timeblock, details: plannerdetails, m_type: meetingtype };
        //     localStorage.setItem("planneritem", JSON.stringify(p_details));
        // }
setInterval(displayDateTime, 1000);
buildCalendar(selected_date);