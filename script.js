console.log('Add validation!');

// const days = [
//     'Sun' ,
//     'Mon' ,
//     'Tue' ,
//     'Wed' ,
//     'Thru' ,
//     'Fri' ,
//     'Sat' ,
// ]

// const dayName = days[dayName.getDay()]


let form = document.querySelector('#parking-form')
form.addEventListener('submit', function(){
    event.preventDefault()
    let total = document.querySelector('#total')
    let days = document.querySelector('#days').value
    total.innerHTML = "The cost is $" + days * 5
})




 


function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

let validcardnum = document.querySelector("#credit-card");

validcardnum.addEventListener('change', function(){
    let creditcardnum = document.querySelector("#credit-card").value;
    if (validateCardNumber(creditcardnum)){
        alert("")
    } else {
        alert("Invaild card")
    }
})



