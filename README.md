# Calendar-organizer
![image](https://user-images.githubusercontent.com/62141103/150691703-98dd66cd-fc7e-4768-a54a-6cd3de0743e1.png)



## Description
Displays a work day organizer to track details about upcoming meetings and events.  
  
## Table of Contents
-[Installation](#installation)

-[Usage](#usage)

-[Credits](#credits)

-[License](#license)

-[Badges](#badges)

-[Features](#features)

-[How To Contribute](#how_to_contribute)

-[Tests](#tests)

-[Acknowledgements](#acknowledgements)


## Installation
Run the application from the following URL: https://sdseney508.github.io/Calendar-organizer/

## Usage
No restrictions on the usage of this calendar tool.

## Credits
For a good review of formating and descriptions of semantic elements and html and CSS tutorials:  https://www.w3schools.com/

For a good review of formating and descriptions of javascript and tutorials:  https://www.w3schools.com/

For jQuery synatx: https://jQuery.com/

## License
License file located at: https://github.com/sdseney508/calendar-organizer/blob/main/license.txt

## Badges
N/A for this project.

## Features
This project contains several features:
    -jQuery datepicker:  used to select which meeting day the user is looking at.  
    -set / get localstorage:  All meeting details are saved into local storage so they can be retrieved in the future.  Each meeting block has a unique_ID comprised of the meeting time and meeting date in YYYYMMDD format.  For example, information on a 0800 meeting on 23 Jan 2021 would have a meeting_id of: 080020210123.
    -Small clock to remind the user of what current time of day is.  It runs off of their computer clock in the local timezone.  No features were added for looking at clocks in other timezones.
    -Background shading of each meeting block changes based on whether the meeting is in the future or the past.
    -Revert to current day button:  Resets the meeting display to the current days meetings.


## How_to_contribute
N/A

## Tests
N/A
