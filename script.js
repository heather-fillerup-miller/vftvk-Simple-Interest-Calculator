function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    console.log("The extracted year is: " + years + " type is: " + typeof(years));
    var interest = (principal * rate) / 100;
    var year = new Date().getFullYear();
    console.log("The current year type: " + year + "type is: " + typeof(year));
    year += years;
    result = document.getElementById("result").innerHTML= "If you deposit " + principal + 
    ", \<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest +
     " in the year " + year + "\<br>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}