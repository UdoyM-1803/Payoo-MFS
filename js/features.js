// Show the Cash Out Form...........

document.getElementById('btn-show-cash-out')
    .addEventListener('click', function(){
        
        // Show the Cash Out form When button clicked
        document.getElementById('cash-out-form').classList.remove('hidden');

        // Hide the Add Money form
        document.getElementById('add-money-form').classList.add('hidden');
    })



// Show the Add Money Form and Hide the Cash Out Form when button clicked..........

document.getElementById('btn-show-add-money')
    .addEventListener('click', function() {

        document.getElementById('cash-out-form').classList.add('hidden');

        document.getElementById('add-money-form').classList.remove('hidden');
    })