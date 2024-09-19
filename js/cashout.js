document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();
    const cashout = getInputFieldValueById('input-cashout');
    const pinNumber = getInputFieldValueById('cashout-pin-number');

    if(pinNumber === 1234){
        const mainBalance = getTextFieldValueById('main-balance');
        const updatedBalance = mainBalance - cashout;
        document.getElementById('main-balance').innerText = updatedBalance;
    }
    else{
        alert('No Money for you...DGM');
    }
});