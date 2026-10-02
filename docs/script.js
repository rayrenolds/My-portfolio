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