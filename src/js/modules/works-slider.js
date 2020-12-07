(function () {
    function Slider(selector) {
        const slider = document.querySelector(selector);
        const list = document.querySelector(".works__desc-list");
        const countSlide = list.children.length;
        const btn = document.querySelector(".works__controls");
        console.log(countSlide);


        let currentSlide = 0;

        const handlers = {
            next: function () {
                if (currentSlide < countSlide - 1) {
                    currentSlide++;
                } else {
                    currentSlide = 0
                }
                this.swipeTo(currentSlide)
            },
            prev: function () {
                if (currentSlide > 0) {
                    currentSlide--;
                } else {
                    currentSlide = countSlide - 1;
                }
                this.swipeTo(currentSlide)

            },
            swipeTo: function (i) {
                list.style.transform = `translateX(${-i * 100}%)`
            }
        }


        btn.addEventListener("click", (e) => {
            const target = e.target.closest("[data-direction]")

            if (!target === null) return;

            const direction = target.dataset.direction;

            handlers[direction]();
        })


    }

    new Slider("#slider-works");

}());