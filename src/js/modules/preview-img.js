(function () {
    const btn = document.querySelector(".works__controls");
    const list = document.querySelectorAll(".works__item");


    btn.addEventListener("click", (e) => {
        const target = e.target.closest("[data-direction]");
        const direction = target.dataset.direction;
        const active = document.querySelector(".active-preview");

        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove("active-preview");

        }
        if (direction === "next") {
            active.nextElementSibling.classList.add("active-preview");
        } else {
            active.previousElementSibling.classList.add("active-preview");
        }


    })
}());

