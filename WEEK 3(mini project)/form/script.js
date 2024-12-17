document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Form fields
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var terms = document.getElementById("terms").checked;

    // Validation flag
    var isValid = true;

    // Validation checks
    if (firstName === "") {
        isValid = false;
        displayError("firstName", "Please enter your first name");
    } else {
        removeError("firstName");
    }

    if (lastName === "") {
        isValid = false;
        displayError("lastName", "Please enter your last name");
    } else {
        removeError("lastName");
    }

    if (email === "") {
        isValid = false;
        displayError("email", "Please enter your email address");
    } else {
        removeError("email");
    }

    if (password === "") {
        isValid = false;
        displayError("password", "Please enter a password");
    } else {
        removeError("password");
    }

    if (confirmPassword === "" || confirmPassword !== password) {
        isValid = false;
        displayError("confirmPassword", "Passwords do not match");
    } else {
        removeError("confirmPassword");
    }

    if (dob === "") {
        isValid = false;
        displayError("dob", "Please enter your date of birth");
    } else {
        removeError("dob");
    }

    if (gender === "") {
        isValid = false;
        displayError("gender", "Please select your gender");
    } else {
        removeError("gender");
    }

    if (!terms) {
        isValid = false;
        displayError("terms", "Please accept the Terms and Conditions");
    } else {
        removeError("terms");
    }

    // If form is valid, show success message
    if (isValid) {
        document.getElementById("successMessage").style.display = "block";

        // Hide the success message after 5 seconds
        setTimeout(function() {
            document.getElementById("successMessage").style.display = "none";
        }, 3000); // 3000 milliseconds = 3 seconds

        // You can submit the form to the server here if needed
    }
});

// Function to display error messages
function displayError(fieldId, message) {
    var field = document.getElementById(fieldId);
    var errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;

    var parent = field.parentElement;
    parent.appendChild(errorElement);
}

// Function to remove error messages
function removeError(fieldId) {
    var field = document.getElementById(fieldId);
    var parent = field.parentElement;
    var errorMessages = parent.getElementsByClassName("error-message");
    for (var i = 0; i < errorMessages.length; i++) {
        parent.removeChild(errorMessages[i]);
    }
}
