document.getElementById("visa-page").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById('visa-page').classList.add('hidden')
    document.getElementById('loader').classList.toggle('hidden')


    var time1 = 2000;
    setTimeout(function () {
        document.getElementById('loader').classList.toggle('hidden')
    }, time1);
    var time2 = 2000;
    setTimeout(function () {
        document.getElementById('success').classList.toggle('hidden')
    }, time2);
    var time3 = 5000;
    setTimeout(function () {
        window.location.href = "../index.html";
    }, time3);


});
function formatCardNumber() {
    var cardNumberInput = document.getElementById('cardNumber');
    var cardNumberValue = cardNumberInput.value.replace(/\s/g, '');
    var formattedCardNumber = '';

    for (var i = 0; i < cardNumberValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedCardNumber += ' ';
        }
        formattedCardNumber += cardNumberValue.charAt(i);
    }

    cardNumberInput.value = formattedCardNumber;
}

document.getElementById('cardNumber').addEventListener('input', formatCardNumber);

function formatExpiryDate() {
    var expiryDateInput = document.getElementById('expiryDate');
    var expiryDateValue = expiryDateInput.value.replace(/\//g, '');
    var expiryDateNumber = '';

    for (var i = 0; i < expiryDateValue.length; i++) {
        if (i === 2) {
            expiryDateNumber += '/';
        }
        expiryDateNumber += expiryDateValue.charAt(i);

    }

    expiryDateInput.value = expiryDateNumber;
}

document.getElementById('expiryDate').addEventListener('input', formatExpiryDate);

