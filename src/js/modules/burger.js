(function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".navigation");
    const close = document.querySelector(".navigation__close");

    burger.addEventListener('click', () => {
        menu.classList.add("navigation--active")
    })

    close.addEventListener('click', () => {
        menu.classList.remove("navigation--active")
    })

    menu.addEventListener('click', () => {
        menu.classList.remove("navigation--active")
    })

}());