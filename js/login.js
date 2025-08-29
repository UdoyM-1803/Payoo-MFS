// // console.log('button clicking file added.')

// // document.getElementById('id').addEventListener('event(click/mouseover)', function(){})

// // Step-1: Set Event Handler************************
// document.getElementById('btn-login').addEventListener('click', function(event){
//     // Step-2: Prevent default behavior (Prevent Reloading Browser)*************************************
//     event.preventDefault();  // Little bit complicated.

//     // Step-3: Get the Phone Number and the Pin Number******************
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     console.log(phoneNumber, pinNumber);

//     Validate the Phone Number and Pin Number...
//     This is Temporary. It is not Advisable........
//     if (phoneNumber === '5' && pinNumber === '1234') {
//         console.log('You are logged in');
//         // Step-5: Allow user to use the website.
//     }
//     else {
//         alert('Wrong phone number or Pin');
//     }
// })

document.getElementById('btn-login').addEventListener('click', function(event) {
    event.preventDefault();

    // Get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    // Bad way to validate
    if (phoneNumber === '016' && pinNumber === '1234') {
        console.log('You are logged in');
        window.location.href = 'https://udoym-1803.github.io/home.html';
    }
    else {
        alert('Wrong phone Number or Pin Number');
    }
})
