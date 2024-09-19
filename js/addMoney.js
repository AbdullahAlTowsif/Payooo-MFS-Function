document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('main-balance');
        const newBalance = addMoney + balance;

        document.getElementById('main-balance').innerText = newBalance;
        // add to transaction history
        const entry = document.createElement('p');
        entry.innerText = `${addMoney} added. Tk. Balance: ${newBalance}`;
        // should be a common function
        document.getElementById('trans-container').appendChild(entry);
    }
    else{
        alert('Failed to add the money!');
    }
});