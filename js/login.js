// console.log('button clicking file added.')

// document.getElementById('id').addEventListener('event(click/mouseover)', function(){})

// Step-1: Set Event Handler************************
document.getElementById('btn-login').addEventListener('click', function(event){
    // Step-2: Prevent default behavior (Prevent Reloading Browser)*************************************
    event.preventDefault();  // Little bit complicated.
    console.log('Login Button Clicked.');

    // Step-3: Get the Phone Number******************
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})