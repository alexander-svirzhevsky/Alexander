(function () {
    new Swiper('.swiper', {

        navigation: {
            nextEl: '.button-slider--next',
            prevEl: '.button-slider--prev'
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        grabCursor: true,

        keyboard: {
            enablded: true,
            onlyInViewport: true
        },

        // autoHeight: true,
        // loop: true,
        speed: 800,
        effect: 'flip',

        flipflowEffect: {
            slideShadows: true,
            limitRotation: true
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
    });

    new Swiper('.swiper-phones', {
        navigation: {
            nextEl: '.button-slider--next',
            prevEl: '.button-slider--prev'
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        grabCursor: true,

        keyboard: {
            enablded: true,
            onlyInViewport: true
        },

        // autoHeight: true,
        // loop: true,
        speed: 800,
        effect: 'flip',

        flipflowEffect: {
            slideShadows: true,
            limitRotation: true
        }
    })
}());
