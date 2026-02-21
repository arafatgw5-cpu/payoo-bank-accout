document.getElementById("cashout-btn").addEventListener("click", function () {

    const cashOutNumber = getValueFromInput("cashout-number");
    if(cashOutNumber.length!=11){
         alert("Invalid Number");
        return;
    }
    const cashOutAmount = getValueFromInput("cashout-amount");

    const balanceElement = document.getElementById("balance");
    const balance = Number(balanceElement.innerText);

    const newBalance = balance - Number(cashOutAmount);

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    const pin = getValueFromInput("cashout-pin");

    if (pin === "2481") {
        alert("Cashout successful");
        balanceElement.innerText = newBalance;
    } else {
        alert("Invalid PIN");
    }

});