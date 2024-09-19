document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();
    const cashout = getInputFieldValueById('input-cashout');
    const pinNumber = getInputFieldValueById('cashout-pin-number');

    if(isNaN(cashout)){
        alert("invalid number");
        return;
    }

    if(pinNumber === 1234){
        const mainBalance = getTextFieldValueById('main-balance');
        if(cashout > mainBalance){
            alert('Insufficient Money');
            return;
        }
        const updatedBalance = mainBalance - cashout;
        document.getElementById('main-balance').innerText = updatedBalance;
        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashout} Withdraw. New Balance: ${updatedBalance} </p>
        `

        document.getElementById('trans-section').appendChild(div);
    }
    else{
        alert('No Money for you...DGM');
    }
});