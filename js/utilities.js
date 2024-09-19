function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
};

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('trans-section').classList.add('hidden');
    // show the other section with the provided parameter
    document.getElementById(id).classList.remove('hidden');
};