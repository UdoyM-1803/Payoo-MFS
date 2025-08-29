// Add money to the Account

// s-1: add event handler (prevent page reload after form submit)

// s-2: get money to be added to the account balance and get the pin number

// s-3: verify the pin number 

// s-4: get the current balance

// s-5: add the money with previous balance

// s-6: update the new balance to the UI/DOM





// Step-1: Add an event handler to the add money button inside the form.*****************************

document.getElementById('btn-add-money').addEventListener('click', function(event){
    // Prevent page reload after form submit
    event.preventDefault();
    // Step-2: Get money to be added to the account*********************
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // Get the Pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // Step-3: Verify pin Number **************************
    // Wrong way to validate pin number
    if (pinNumberInput === '1234'){
        console.log('Adding Money to the account.');

        // Step-4: Get the current balance************************
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        // Step-5: Add addMoneyInput with balance**************************
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // Step-6: Update the balance in UI/DOM******************************
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to add Money! Please, try again.')
    }
})