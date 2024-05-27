const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

form.addEventListener("submit", (e) => {
    let messages = [];

    if (email.value === "" || email.value == null) {
        messages.push("Email is required");
    }

    if (!validateEmail(email.value)) {
        messages.push("Please enter a valid email address");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
});
