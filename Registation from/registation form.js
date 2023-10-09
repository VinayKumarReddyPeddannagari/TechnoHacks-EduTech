let registrationFormEl = document.getElementById("registrationForm");
let usernameEl = document.getElementById("username");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

// adding paragraph elemtns to show error
let errorMsgUsernameEl = document.getElementById("errorMsgUsername");
let errorMsgUserEmailEl = document.getElementById("errorMsgUserEmail");
let errorMsgPasswordEl = document.getElementById("errorMsgPassword");
let errorMsgConfirmPasswordEl = document.getElementById("errorMsgConfirmPassword");

// adding popup 
let popupEl = document.getElementById("popup");

function openpopup() {
    popupEl.classList.add("open-popup");
}

function closepopup() {
    popupEl.classList.remove("open-popup");
}


usernameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMsgUsernameEl.textContent = "*Required";
    } else {
        errorMsgUsernameEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMsgUserEmailEl.textContent = "*Required";
    } else {
        errorMsgUserEmailEl.textContent = "";
    }
});
passwordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMsgPasswordEl.textContent = "*Required";
    } else {
        errorMsgPasswordEl.textContent = "";
    }
});
confirmPassword.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMsgConfirmPasswordEl.textContent = "*Re-Enter Password";
    } else if (event.target.value !== passwordEl.value) {
        errorMsgConfirmPasswordEl.textContent = "*Passwords do NOT match";
    } else {
        errorMsgConfirmPasswordEl.textContent = "";
    }
});



registrationFormEl.addEventListener("click", function(event) {
    event.preventDefault();
});