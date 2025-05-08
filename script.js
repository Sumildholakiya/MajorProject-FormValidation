const form = document.getElementById("registrationForm");

// Validate full name
function validateName() {
    const name = document.getElementById("fullname")
    if (name.value.trim().length < 5) {
        alert("Name must be at least 5 characters long.");
        name.focus()
    }
}

// Validate email format
function validateEmail() {
    const email = document.getElementById("email");
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        email.focus()
    }
}

// Validate phone number
function validatePhone() {
    const phone = document.getElementById("phone");
    if (phone === "123456789" || !/^\d{10}$/.test(phone.value.trim())) {
        alert("Phone number must be a valid 10-digit number (not 123456789).");
        phone.focus()
    }
}

function togglePassword(fieldId, toggleIcon) {
    const input = document.getElementById(fieldId);
    const icon = toggleIcon.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    } else {
        input.type = "password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    }
}


// Validate password strength
function validatePassword() {
    const password = document.getElementById("password");
    const name = document.getElementById("fullname").value.trim();
    if (password.value === "password" || password.value === name || password.value.length < 8) {
        alert("Password is weak. Use at least 8 characters and avoid using your name or 'password'.");
        password.focus()
    }
}

// Confirm both passwords match
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword");
    if (confirmPassword.value !== password) {
        alert("Passwords do not match.");
        confirmPassword.focus()
    }
}

// Final check on form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // All field checks again before submission
    if (name.length < 5) {
        alert("Name must be at least 5 characters.");
        return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        alert("Invalid email address.");
        return;
    }

    if (phone === "123456789" || !/^\d{10}$/.test(phone)) {
        alert("Phone number must be a valid 10-digit number.");
        return;
    }

    if (password === "password" || password === name || password.length < 8) {
        alert("Invalid password.");
        return;
    }

    if (confirmPassword !== password) {
        alert("Passwords do not match.");
        return;
    }

    // Success!
    alert("Registration Successful!");
    form.reset();
});
