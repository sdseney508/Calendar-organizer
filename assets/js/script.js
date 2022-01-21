//these are all of the global variables used to set and get the local storage

//use this to make sure we only display the correct number of days in the month and flag if someone tries to select like
//30 Feb and tell them it is an invalid day.
var month_day_object = {Jan: 31,
                    Feb: 28,
                    Mar: 31,
                    Apr: 30,
                    May: 31,
                    Jun: 30,
                    Jul: 31,
                    Aug: 31,
                    Sep: 30,
                    Oct: 31,
                    Nov: 30,
                    Dec: 31};
var dayselected; //from  date select form in the navbar of the website
var monthselected;  //from  date select form in the navbar of the website
var yearselected;  //from  date select form in the navbar of the website
var plannedetails = ''; //from the individual time container blocks.
var meetingtype = ''; //from the pop up form when you select on a time block.

//Overview:  
//Create a navbar with drop down type selectors to get the date for the meetings and organization info.  This opens a small drop down 
//selector form in the navbar at the top of the page.  It then uses the date info (day, month, year) selected to
//run the getLocalStorage function.  The same info plus the timeblock, meeting details (plannedetails variable), 
//and meetingtype is also used to set localstorage for future retrievals.


//first i need to populate the dropdown selectors.
// function makeDateSelector(day_fld, month_fld, year_fld){

function makeDateSelector(){
    //set up the va
    var curr_day = new Date();
    var selected_day = document.getElementById(day_selector)
    var selected_month = document.getElementById(month_selector)
    var selected_year = document.getElementById(year_selector)
    for (var i=0; i<32; i++)
        dayfield.options[i]=new Option(i, i+1)
        dayfield.options[today.getDate()]=new Option(today.getDate(), today.getDate(), true, true) //select today's day
    
        for (var m=0; m<12; m++)
        monthfield.options[m]=new Option(monthtext[m], monthtext[m])
        monthfield.options[today.getMonth()]=new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true) //select today's month
        var thisyear=today.getFullYear()
    
        for (var y=0; y<20; y++){
    yearfield.options[y]=new Option(thisyear, thisyear)
    thisyear+=1
    }
    yearfield.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true) //select today's year
}



//contains the functions needed to run the daily calendar application.

//retrieves anything saved to local storage
function getLocalStorage(dayselected, monthselected, yearselected, timeblock) {
    p_details = JSON.parse(localStorage.getItem("p_details"));
}

//sets the local storage for a selected timeblock.  inputs are the date,
//timeblock, entered details, and meeting color.
function setLocalStorage(dayselected, monthselected, yearselected, timeblock, plannerdetails, meetingtype) {
    p_details = {date_sel: dayselected, t_block: timeblock, details: plannerdetails, m_type: meetingtype};
    localStorage.setItem("planneritem", JSON.stringify(p_details));
}