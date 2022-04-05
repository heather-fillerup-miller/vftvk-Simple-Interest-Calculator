console.log("Updated Input Margins");

// calculate the simple interest A = P * r * t
function compute()
{
    var principal = document.getElementById("principal").value;

    // display error if amount is not valid
    if (principal <= 0) {
        alert("Please enter a positive Amount");
        document.getElementById("principal").focus();
    }
    // calculate total interest and display result
    else {
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
        var amount = principal * years * rate / 100;
        var currentYear = new Date().getFullYear();
        years += currentYear;
        
        result = document.getElementById("result").innerHTML= `If you deposit \<mark\>${principal}\</mark\>, 
        \<br\>at an interest rate of \<mark\>${rate}%\</mark\>.\<br\>You will receive an amount of \<mark\>
        ${amount}\</mark\>,\<br\>in the year \<mark\>${years}\</mark\>\<br>`;
    }
}

// dynamically update the value of the interest rate with highlighted values
function updateRate() {
    var rateval = document.getElementById("rate").value + "%";
    document.getElementById("rate_val").innerText=rateval;
}