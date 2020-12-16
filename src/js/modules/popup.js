(function () {
    let unlock = true;
    const popups = document.querySelectorAll(".popup-link");
    const body = document.querySelector("body");
    const timeOut = 800;

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
        if (curentPopup && unlock) {
            bodyLock()
            curentPopup.classList.add("popup-open");
            curentPopup.addEventListener("click", (e) => {
                if (!e.target.closest(".popup__content")) {
                    popupClose(e.target.closest(".popup"))
                }
            })
        }
    }

    function popupClose(popupActive) {
        popupActive.classList.remove("popup-open");
        bodyUnLock();
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
        body.style.paddingRight = lockPaddingValue;
        body.classList.add("lock")

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeOut);
    }

    function bodyUnLock() {
        setTimeout(() => {
            body.style.paddingRight = "0px";
            body.classList.remove("lock")
        }, timeOut);

        unlock = false;
        setTimeout(() => {
            unlock = true;
        }, timeOut)
    }

}());