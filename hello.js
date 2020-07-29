
function leapyear(year){


if (year%4==0 || year%400==0 && year%100==0)
{

    return true;
    
}
else{

    return false;
}


}
var result = leapyear(2026);
console.log(result);