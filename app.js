var inputDate=document.querySelector("textarea");
var btn=document.querySelector(".btn-submit");
var leapYearResult=document.getElementById("leap-year");
var primeResult=document.getElementById('prime');

function primeDate(birthDate){
    var flag=true;
    for (var i = 2; i < birthDate; i++){
        if (birthDate % i == 0){
            flag=false;
            }
    }
    if(!flag){
        primeResult.innerText="Your Birthday is not a prime number"
    }
    else{
        primeResult.innerText="Your Birthday is a prime number"
    }
        
}

function leapYear(year){
    if(isNaN(year)){
        leapYearResult.innerText="Enter birthday in the given format"
    }
    else{
        if(((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)){
            leapYearResult.innerText-"You were born on a leap year";
        }
        else{
            leapYearResult.innerText='You were not born on a leap year'
        }
    }
}

function clickHandler(){
    var date=inputDate.value;

    var dateArr=date.split("/");
    var birthDay=dateArr[0];
    var year=dateArr[2];
    primeDate(birthDay);
    leapYear(year)
}

btn.addEventListener("click",clickHandler);