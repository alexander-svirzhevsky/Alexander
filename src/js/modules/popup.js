(function () {
    let unlock = true;

    const popups = document.querySelectorAll(".popup-link");
    if (popups.length > 0) {
        for (let i = 0; i < popups.length; i++) {
            const element = popups[i];

            element.addEventListener("click", (e) => {
                const popupName = element.getAttribute('href').replace("#", "");
                const curentPopup = document.getElementById(popupName);

                popupOpen(curentPopup);
                e.preventDefault()
            })
        }
    }

    const popupCloseIcon = document.querySelectorAll(".close-popup");
    if (popupCloseIcon.length > 0) {
        for (let i = 0; i < popupCloseIcon.length; i++) {
            const el = popupCloseIcon[i];

            el.addEventListener("click", (e) => {
                popupClose(el.closest(".popup"));
                e.preventDefault();
            })
        }
    }

    function popupOpen(curentPopup) {
        curentPopup.classList.add("popup-open");
        curentPopup.addEventListener("click", (e) => {
            if (!e.target.closest(".popup__content")) {
                popupClose(e.target.closest(".popup"))
            }
        })
    }

}())