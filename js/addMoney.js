/**
 * 1. Add event listener to the add money button (form submit)
 * make sure to preventDefault so that page doesn't reloads
 * 
 * 2. Get hte money user wants to add also, get the pin number provided
 * 
 * 3. Verify the pin number:
 *          wrong ==> failed to add
 *          right ==> allow to add the number to the      account balance
 * 
 * 4. Get the current balance
 * 
 * 5. Add money to be added with the current balance
 * 
 * 6. Display/Update the balance in DOM/UI
*/ 


document.getElementById('btn-add-money')
    .addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Added the eventHandler');

        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;


        if (pinNumber === '1234') {
            // add money to the account
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);

            const newBalance = balanceNumber + addMoneyNumber;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Failed to add money. Please try again later.');
        }
    })
