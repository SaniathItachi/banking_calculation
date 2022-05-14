// deposit amount calculation
document.getElementById("deposit-submit").addEventListener('click',function(){
    const depositField = document.getElementById("deposit-amount");
    const depositAmountText = depositField.value;
    const depositAmount = parseFloat(depositAmountText);

    // adding deposit amount
    const depositInfo = document.getElementById("deposit");

    // adding with the existing amount
    const existingAmountText = depositInfo.innerText;
    const existingAmount = parseFloat(existingAmountText);
    const finalAmount = existingAmount + depositAmount;
    depositInfo.innerText = finalAmount;

    // adding amount to the total balance
    const totalBalanceField = document.getElementById("total-money");
    const totalBalanceText = totalBalanceField.innerText;
    const totalBalanceInfo = parseFloat(totalBalanceText);
    const totalBalance = totalBalanceInfo + depositAmount;
    totalBalanceField.innerText = totalBalance;





    // empty field
    depositField.value = "";

})
// withdraw amount calculation
document.getElementById("withdraw-submit").addEventListener('click',function(){
    const withdrawField = document.getElementById("withdraw-amount");
    const withdrawAmountText = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // adding deposit amount
    const withdrawInfo = document.getElementById("withdraw");

    // adding with the existing amount
    const existingAmountText = withdrawInfo.innerText;
    const existingAmount = parseFloat(existingAmountText);
    const finalAmount = existingAmount + withdrawAmount;
    withdrawInfo.innerText = finalAmount;

    // adding amount to the total balance
    const totalBalanceField = document.getElementById("total-money");
    const totalBalanceText = totalBalanceField.innerText;
    const totalBalanceInfo = parseFloat(totalBalanceText);
    const totalBalance = totalBalanceInfo - withdrawAmount;
    totalBalanceField.innerText = totalBalance;





    // empty field
    withdrawField.value = "";

})