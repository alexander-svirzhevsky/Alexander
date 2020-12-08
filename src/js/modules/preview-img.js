(function () {
    const list = document.querySelectorAll(".works__item");
    const wrap = document.querySelector(".works__controls");

    let current = 0;
    const length = list.length - 1;


    wrap.addEventListener("click", (e) => {

        const { direction, index } = e.target.dataset;

        if (!direction && !index) {
            return false;
        }

        list[current].classList.remove("active-preview");

        if (direction) {
            if (direction === "next") {
                current = current + 1 > length ? 0 : current + 1;
            }

            if (direction === "prev") {
                current = current - 1 < 0 ? length : current - 1;
            }
        }

        if (index) {
            current = +index;
        }

        list[current].classList.add("active-preview");

    })
}());
