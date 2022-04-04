function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years"));
    var interest = (principal * rate) / 100;
    var year = new Date.now().getFullYear();
    console.log("The current year is: " + year);
    year += years;
    result = document.getElementById("result").innerHTML= "If you deposit " + principal + 
    ", \<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest +
     " in the year " + year + "\<br>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}