document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('main-balance');
        const newBalance = addMoney + balance;

        document.getElementById('main-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add the money!');
    }
});