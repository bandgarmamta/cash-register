const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const nextButton = document.querySelector("#next-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextBlock = document.querySelector(".next-block");
const nextMessage = document.querySelector("#error-message-next");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 2, 1];



function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

message.style.display = "none";
nextBlock.style.display = "none";


nextButton.addEventListener("click", function () {
    if (billAmount.value > 0) {
        nextBlock.style.display = "block";
        nextMessage.style.display="none";
    } else {
        nextMessage.innerText="Invalid Bill Amount";
    }

})

checkButton.addEventListener("click", function validate() {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
    } else {
        showMessage("The cash provided should atleast be equal to the bill amount");
    }

    if (billAmount.value == "" || cashGiven.value == "") {
        message.style.display = "none";
    }


});


