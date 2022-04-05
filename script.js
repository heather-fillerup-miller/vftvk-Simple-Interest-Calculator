function compute()
{
    var principal = document.getElementById("principal").value;
    //display error if amount is not valid
    if (principal <= 0) {
        alert("Please enter valid Amount");
        document.getElementById("principal").focus();
    }
    //calculate amount with interest and display result
    else {
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
        var amount = principal * (1 + (years * rate / 100));
        var year = new Date().getFullYear();
        years += year;
        var principalString = "\<mark\>" + principal + "\</mark\>";
        
        result = document.getElementById("result").innerHTML= `If you deposit \<mark\>${principal}\</mark\>,` 
        `\<br\>at an interest rate of \<mark\>${rate}%\</mark\>\<br\>You will receive an amount of \<mark\>`
        `${amount}\</mark\> i in the year \<mark\>${year}\</mark\>\<br>`;
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value + "%";
    document.getElementById("rate_val").innerText=rateval;
}