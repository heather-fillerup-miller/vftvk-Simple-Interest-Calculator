// calculate the simple interest A = P(1 + rt)
function compute()
{
    var principal = document.getElementById("principal").value;

    // display error if amount is not valid
    if (principal <= 0) {
        alert("Please enter valid Amount");
        document.getElementById("principal").focus();
    }
    // calculate total interest and display result
    else {
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
        var amount = principal * (1 + (years * rate / 100));
        var year = new Date().getFullYear();
        years += year;
        
        result = document.getElementById("result").innerHTML= `If you deposit \<mark\>${principal}\</mark\>, 
        \<br\>at an interest rate of \<mark\>${rate}%\</mark\>\<br\>You will receive an amount of \<mark\>
        ${amount}\</mark\> in the year \<mark\>${year}\</mark\>\<br>`;
    }
}

// dynamically update the value of the interest rate with highlighted values
function updateRate() {
    var rateval = document.getElementById("rate").value + "%";
    document.getElementById("rate_val").innerText=rateval;
}