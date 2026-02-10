 const buttons = document.querySelectorAll("#Choicebtn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            // prevent changing answers
            if (document.querySelector(".correct, .wrong")) return;

            const isCorrect = btn.dataset.correct === "true";

            if (isCorrect) {
                btn.classList.add("correct");
            } else {
                btn.classList.add("wrong");
                // also reveal the correct one
                document.querySelector('[data-correct="true"]').classList.add("correct");
            }
        });
    });