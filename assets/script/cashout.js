document.getElementById("cashout-btn").addEventListener("click", function () {

    const cashOutNumber = getValueFromInput("cashout-number");
    if (cashOutNumber.length != 11) {
        alert("Invalid Number");
        return;
    }
    const cashOutAmount = getValueFromInput("cashout-amount");
    const currentBalance = getBalance()

    const newBalance = currentBalance - Number(cashOutAmount);

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    const pin = getValueFromInput("cashout-pin");

    if (pin === "2481") {
        alert("Cashout successful");
        setBalance(newBalance);
    } else {
        alert("Invalid PIN");
    }

});