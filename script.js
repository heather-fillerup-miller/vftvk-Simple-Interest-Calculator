function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Please enter valid Amount");
        document.getElementById("amount").focus;
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
        var amount = principal * (1 + (years * rate / 100));
        var year = new Date().getFullYear();
        years += year;
        
        result = document.getElementById("result").innerHTML= "If you deposit " + principal + 
        ", \<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + amount +
         " in the year " + year + "\<br>";
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value + "%";
    document.getElementById("rate_val").innerText=rateval;
}