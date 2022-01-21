/*
Given a date string, , in the format MM/DD/YYYY, find and return the day name for that date dateString
Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. 
For example, the day name for the date 12/07/2016 is Wednesday.
*/


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function getDayName(dateString) {
    let dayName;
    
    let num = new Date(dateString)
    let day = num.getDay()
    
    for(let i=0; i<days.length;i++){
        dayName = days[day]
    }


    return dayName;
}