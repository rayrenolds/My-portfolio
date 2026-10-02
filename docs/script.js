const buttons = document.querySelectorAll("button[data-filter]");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const filter = button.dataset.filter;

        cards.forEach(function (card) {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";
    document.getElementById("form-success").textContent = "";

    let valid = true;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        document.getElementById("name-error").textContent = "Please enter your name";
        valid = false;
    }

    if (!pattern.test(email)) {
        document.getElementById("email-error").textContent = "Please enter a valid email";
        valid = false;
    }

    if (message === "") {
        document.getElementById("message-error").textContent = "Please enter a message";
        valid = false;
    }

    if (valid) {
        document.getElementById("form-success").textContent = "Thank you, your message was sent!";
        form.reset();
    }
});